import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

    public title:string = '';
    private subscription: Subscription = new Subscription();
    constructor(private router: Router, private activeRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.subscription = this.router.events
        .pipe(
            filter(event => event instanceof NavigationEnd)
        )
        .subscribe(() => {
            this.title = this.activeRoute.snapshot.firstChild?.url[0]?.path || '';
        })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
