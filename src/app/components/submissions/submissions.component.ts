import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { filter, distinctUntilChanged, map, delay } from 'rxjs/operators';

@Component({
    selector: 'app-submissions',
    templateUrl: './submissions.component.html',
    styleUrls: ['./submissions.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SubmissionsComponent implements OnInit, AfterViewInit {

    @ViewChild('tabGroup', { static: false }) tabGroup: any;
    @ViewChild('submissionsActions', { static: false }) submissionsActions: any;
    additionalMargin: number = 0;

    constructor(private rendrer: Renderer2) { }

    ngOnInit(): void {

    }

    ngAfterViewInit() {
        this.addEmptyElementstoMatTab();
        const contentEl: NodeListOf<Element> = document.querySelectorAll('.mat-tab-body')!;
        this.additionalMargin = this.submissionsActions.nativeElement.offsetHeight - 67;

        if(this.additionalMargin > 0) {
            contentEl.forEach(el => {
                (el as HTMLElement).style.marginTop = 27 + this.additionalMargin + 'px';
            })
        }
        
        this.onChangingHeightOfActions.subscribe((height: number) => {
            this.additionalMargin = height - 67;
            if(this.additionalMargin > 0) {
                contentEl.forEach(el => {
                    (el as HTMLElement).style.marginTop = 27 + this.additionalMargin + 'px';
                })
            } else {
                contentEl.forEach(el => {
                    (el as HTMLElement).style.marginTop = '27px';
                })
            }
        });
    }


    private addEmptyElementstoMatTab() {
        const placeholderDiv: HTMLElement = this.rendrer.createElement('div');
        const exportButton: HTMLElement = this.rendrer.createElement('button');
        const submissionsACtions: HTMLElement = document.querySelector('.submissions__actions')! as HTMLElement;
        const parentEl = document.querySelector('.mat-tab-label-container')!;

        this.rendrer.addClass(exportButton, 'submissions__export-btn');
        exportButton.innerHTML='<span class=submissions__export-btn__icon></span> <span>Export</span>';
        
        placeholderDiv.style.width = submissionsACtions.offsetWidth + 'px';
        this.rendrer.insertBefore(parentEl, placeholderDiv, parentEl.childNodes[0]);
        this.rendrer.insertBefore(parentEl, exportButton, parentEl.childNodes[2]);
    }

    private onChangingHeightOfActions: Observable<number> = fromEvent(window, 'resize').pipe(
        distinctUntilChanged(),
        filter((event) => !!event.currentTarget),
        map(() => {
            return this.submissionsActions.nativeElement.offsetHeight
        })
    );
}
