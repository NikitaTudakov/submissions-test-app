import { Component, Input, OnInit } from '@angular/core';
import { Submission } from 'src/shared/interfaces/submission.interface';

@Component({
  selector: 'app-submission-map',
  templateUrl: './submission-map.component.html',
  styleUrls: ['./submission-map.component.scss']
})
export class SubmissionMapComponent implements OnInit {

  @Input() submissions: Submission[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
