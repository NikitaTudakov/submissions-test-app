import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from, fromEvent, Observable, Subject } from 'rxjs';
import { filter, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { SubmissionsService } from 'src/app/services/submissions.service';
import { SubmissionStatusEnum } from 'src/shared/enums/submissionEnum';
import { Submission } from 'src/shared/interfaces/submission.interface';

@Component({
    selector: 'app-submissions',
    templateUrl: './submissions.component.html',
    styleUrls: ['./submissions.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SubmissionsComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('tabGroup', { static: false }) tabGroup: any;
    @ViewChild('submissionsActions', { static: false }) submissionsActions: any;
    private additionalMargin: number = 0;
    public subscription: Subject<void> = new Subject();
    public submissions: Submission[] = [];
    public filteredSubmissions: Submission[] = [];
    public submissionsFilterForm = new FormGroup({
        task: new FormControl(''),
        from: new FormControl(''),
        status: new FormControl(''),
        date: new FormControl(''),
    })

    get submissionStatus(): typeof SubmissionStatusEnum {
        return SubmissionStatusEnum
    }

    get submissionFromEmailsList(): string[] {
        return [...new Set(this.submissions.map(el => el.from))]  
    }

    get CurrentTime(): number {
        return Date.now()
    }

    constructor(
        private rendrer: Renderer2,
        private submissionService: SubmissionsService) {
    }

    ngOnInit(): void {
        this.getSubmissions();
        this.filteredSubmissions = [...this.submissions];

        this.submissionsFilterForm.valueChanges.pipe(takeUntil(this.subscription)).subscribe((formValues:Submission) => {
            this.filteredSubmissions = [...this.submissions];
            let key: keyof Submission;
            for(key in formValues) {
                if(key === 'task') {
                    this.filteredSubmissions = this.filteredSubmissions.filter(submission => {
                        return submission.task.toLowerCase().includes(formValues.task.toLowerCase())
                    })
                } else if(key === 'date' && formValues[key]) {
                    this.filteredSubmissions = this.filteredSubmissions.filter(submission => {
                        let submissionDate = submission.date;
                        submissionDate.setHours(0,0,0,0);
                        return submissionDate.getTime() === formValues.date.getTime();
                    })
                }else if(formValues[key]) {
                    this.filteredSubmissions = this.filteredSubmissions.filter(submission => submission[key] === formValues[key])
                }
            }
        })
    }

    ngAfterViewInit() {
        this.addEmptyElementstoMatTab();
        const contentEl: NodeListOf<Element> = document.querySelectorAll('.mat-tab-body')!;
        this.additionalMargin = this.submissionsActions.nativeElement.offsetHeight - 67;
        const topHeight = (document.querySelector('.app-navigation')! as HTMLElement).offsetHeight + 169 + this.additionalMargin;
        document.documentElement.style.setProperty('--top-height', topHeight + 'px');

        if(this.additionalMargin > 0) {
            contentEl.forEach(el => {
                (el as HTMLElement).style.marginTop = 27 + this.additionalMargin + 'px';
            })
        }
        
        this.onChangingHeightOfActions.pipe(takeUntil(this.subscription)).subscribe((height: number) => {
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

            const topHeight = (document.querySelector('.app-navigation')! as HTMLElement).offsetHeight + 169 + this.additionalMargin;
            document.documentElement.style.setProperty('--top-height',topHeight + 'px');
        });
    }

    ngOnDestroy(): void {
        this.subscription.next();
        this.subscription.complete();
    }

    public getSubmissions(): void {
        this.submissions = this.submissionService.getSubmissions();
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
