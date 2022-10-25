import { Component, Input, OnInit } from '@angular/core';
import { Submission } from 'src/shared/interfaces/submission.interface';

@Component({
    selector: 'app-submission-map',
    templateUrl: './submission-map.component.html',
    styleUrls: ['./submission-map.component.scss']
})
export class SubmissionMapComponent implements OnInit {
    center: google.maps.LatLngLiteral;
    options: google.maps.MapOptions = {
        disableDoubleClickZoom: true,
        maxZoom: 15,
        minZoom: 8,
    };

    @Input() submissions: Submission[] = [];

    ngOnInit(): void {
        if(this.submissions[0]) {
            this.center = this.submissions[0].position
        } else {
            this.center = {
            lat: 40.78088126989974,
            lng: -73.96854657814114
            }
        }
    }
}
