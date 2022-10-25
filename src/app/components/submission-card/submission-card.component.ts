import { Component, Input } from '@angular/core';
import { Submission } from 'src/shared/interfaces/submission.interface';

@Component({
  selector: 'app-submission-card',
  templateUrl: './submission-card.component.html',
  styleUrls: ['./submission-card.component.scss']
})
export class SubmissionCardComponent {

  @Input() submission: Submission;

  isExpiried(submissionDate: Date): boolean {
    return Date.now() > submissionDate.getTime()
}
}
