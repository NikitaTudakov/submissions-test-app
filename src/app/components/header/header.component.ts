import { Component } from '@angular/core';
import { NavigationEnum } from 'src/shared/enums/navigationEnum';
import { NavigationLink } from 'src/shared/interfaces/navigationLink.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public navigationItems: NavigationLink[] = [
        {
            title: NavigationEnum.FORMS,
            icon: 'list',
            routerLink: '/forms'
        },
        {
            title: NavigationEnum.CUSTOMERS,
            icon: 'people',
            routerLink: '/customers'
        },
        {
            title: NavigationEnum.SUBMISSIONS,
            icon: 'graphic_eq',
            routerLink: '/submissions'
        },
        {
            title: NavigationEnum.HISTORY,
            icon: 'history',
            routerLink: '/history'
        },
        {
            title: NavigationEnum.REPORTS,
            icon: 'assessment',
            routerLink: '/reports'
        },
        {
            title: NavigationEnum.WORKFLOW,
            icon: 'assessment',
            routerLink: '/workflow'
        }
    ]

    // notifications, exit_to_app
    
    get NavigationEnum(): typeof NavigationEnum {
        return NavigationEnum
    }

}
