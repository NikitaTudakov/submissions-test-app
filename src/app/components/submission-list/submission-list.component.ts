import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Submission } from 'src/shared/interfaces/submission.interface';

@Component({
    selector: 'app-submission-list',
    templateUrl: './submission-list.component.html',
    styleUrls: ['./submission-list.component.scss']
})
export class SubmissionListComponent implements OnInit, OnChanges {

    @Input() submissions: Submission[] = [];

    public slicedSubmissions: Submission[] = [];
    public currentPageNumber: number = 1;

    get totalSubmissions(): number {
        return this.submissions.length
    }

    get isLastPage(): boolean {
        return this.currentPageNumber === Math.ceil(this.submissions.length/10)
    }

    get currentSubmissions(): string {
        return `${10*this.currentPageNumber-9}-${this.isLastPage ?  this.submissions.length : 10*this.currentPageNumber}`
    }

    get paginationPages(): (number | null)[] {
        if(this.submissions.length <= 10) {
            return [1]
        } else if(this.submissions.length <= 50) {
            return Array(Math.ceil(this.submissions.length/10)).fill(1).map((x,i)=>i+1)
        } else {
            const lastPage = Math.ceil(this.submissions.length/10);
            const firstPage = lastPage - this.currentPageNumber < 4 ? lastPage-4 : this.currentPageNumber;
            const secondPage = lastPage - this.currentPageNumber < 4 ? lastPage-3 : this.currentPageNumber+1;
            const thirdPage = lastPage - this.currentPageNumber > 4 ? null : lastPage-2;
            const fourthPage = lastPage-1;
            const fifthPage = lastPage;

            return [firstPage,secondPage,thirdPage,fourthPage,fifthPage]
        }
    }

    ngOnInit(): void {
        this.slicedSubmissions = this.submissions.slice(0,10)
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.submissions) {
            this.slicedSubmissions = this.submissions.slice(0,10);
            this.currentPageNumber = 1;
        }
    }

    getPage(page: number | null): void {
        if(page === null) {
            this.currentPageNumber = this.currentPageNumber+2;
            this.slicedSubmissions = this.submissions.slice((this.currentPageNumber-1)*10,this.currentPageNumber*10);
        } else {
            this.currentPageNumber = page;
            this.slicedSubmissions = this.submissions.slice((page-1)*10,page*10);
        }
    }

    isExpiried(submissionDate: Date): boolean {
        return Date.now() > submissionDate.getTime()
    }

}
