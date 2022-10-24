import { Component, Input, OnInit } from '@angular/core';
import { Submission } from 'src/shared/interfaces/submission.interface';

@Component({
  selector: 'app-submission-card',
  templateUrl: './submission-card.component.html',
  styleUrls: ['./submission-card.component.scss']
})
export class SubmissionCardComponent implements OnInit {

  @Input() submission: Submission;

  constructor() { }

  ngOnInit(): void {
  }

  isExpiried(submissionDate: Date): boolean {
    return Date.now() > submissionDate.getTime()
}
}
