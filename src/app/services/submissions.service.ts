import { Injectable } from "@angular/core";
import { SubmissionStatusEnum } from "src/shared/enums/submissionEnum";
import { Submission } from "src/shared/interfaces/submission.interface";

@Injectable({
    providedIn: 'root',
})
export class SubmissionsService {
    private submissionsData: Submission[]  = [
        {
            task: 'Work Flow: Requires Location1',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit.com',
            address: '156 Wooster St, New York, NY 10012',
            date: new Date(2022, 11, 5, 15, 0),
            position: {
                lat: 40.7263482980328, 
                lng: -73.9992063711641
            }
        },
        {
            task: 'Work Flow: Requires Location2',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit.com',
            address: '665 Broadway, New York, NY 10012',
            date: new Date(2022, 9, 15, 12, 30),
            position: {
                lat: 40.72811550009407, 
                lng: -73.99527385849096
            }
        },
        {
            task: 'Work Flow: Requires Location3',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit.com',
            address: '25 E 4th St, New York, NY 10003',
            date: new Date(2022, 10, 23, 18, 30),
            position: {
                lat: 40.72848917366067, 
                lng: -73.99244091986493
            }
        },
        {
            task: 'Work Flow: Requires Location4',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit3.com',
            address: '145 2nd Ave, New York, NY 10003',
            date: new Date(2022, 10, 7, 15, 30),
            position: {
                lat: 40.73018505459507, 
                lng: -73.98735968917696
            }
        },
        {
            task: 'Work Flow: Requires Location5',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu3.com',
            to: 'tracy@zenduit1.com',
            address: '298 1st Ave., New York, NY 10009',
            date: new Date(2022, 9, 1, 6, 30),
            position: {
                lat: 40.733760239850994, 
                lng: -73.97912256749444
            }
        },
        {
            task: 'Work Flow: Requires Location6',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit5.com',
            address: '510 E 23rd St, New York, NY 10010',
            date: new Date(2022, 10, 9, 12, 5),
            position: {
                lat: 40.73620881391995,
                lng: -73.97635193520429
            }
        },
        {
            task: 'Work Flow: Requires Location7',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit2.com',
            address: '271 11th Ave, New York, NY 10001',
            date: new Date(2022, 10, 9, 6, 30),
            position: {
                lat: 40.75251796240403,
                lng: -74.00308939870565
            }
        },
        {
            task: 'Work Flow: Requires Location8',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit13.com',
            address: '662 9th Ave, New York, NY 10036',
            date: new Date(2022, 9, 11, 6, 50),
            position: {
                lat: 40.76166308319022,
                lng: -73.98944715160232
            }
        },
        {
            task: 'Work Flow: Requires Location9',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu6.com',
            to: 'tracy@zenduit13.com',
            address: '807 8th Ave, New York, NY 10019',
            date: new Date(2022, 10, 8, 6, 30),
            position: {
                lat: 40.762098567835025,
                lng: -73.98585805160207
            }
        },

        {
            task: 'Work Flow: Requires Location10',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu5.com',
            to: 'tracy@zenduit13.com',
            address: '810 Seventh Avenue, New York, NY 10019',
            date: new Date(2022, 9, 24, 22, 30),
            position: {
                lat: 40.763008290169125,
                lng: -73.9826409505334
            }
        },
        {
            task: 'Work Flow: Requires Location11',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu5.com',
            to: 'tracy@zenduit2.com',
            address: 'Burlington House, 1343 6th Ave, New York, NY 10105',
            date: new Date(2022, 10, 5, 6, 30),
            position: {
                lat: 40.76307586607993,
                lng: -73.97905863518974
            }
        },
        {
            task: 'Work Flow: Requires Location12',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu5.com',
            to: 'tracy@zenduit5.com',
            address: 'Genewral-Motors-Building, New York, NY 10022',
            date: new Date(2022, 10, 3, 6, 30),
            position: {
                lat: 40.76362277534654,
                lng:  -73.97244815053303
            }
        },
        {
            task: 'Work Flow: Requires Location13',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit.com',
            address: '797 Lexington Ave Suite 3R, New York, NY 10002',
            date: new Date(2022, 10, 12, 6, 30),
            position: {
                lat: 40.76376696201102,
                lng: -73.96684186587645
            }
        },        
        {
            task: 'Work Flow: Requires Location14',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit6.com',
            address: '1339 York Ave, New York, NY 10021',
            date: new Date(2022, 10, 10, 6, 30),
            position: {
                lat: 40.76663927691472,
                lng: -73.954399065875
            }
        },
        {
            task: 'Work Flow: Requires Location15',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit1.com',
            address: '750 Main St, New York, NY 10044',
            date: new Date(2022, 10, 5, 6, 30),
            position: {
                lat: 40.76644937083373,
                lng: -73.94491423518798
            }
        },
        {
            task: 'Work Flow: Requires Location16',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit3.com',
            address: '2106 30th Ave., Queens, NY 11102',
            date: new Date(2022, 10, 3, 6, 30),
            position: {
                lat: 40.76968157237287,
                lng: -73.92762875052985
            }
        },
        {
            task: 'Work Flow: Requires Location17',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu3.com',
            to: 'tracy@zenduit1.com',
            address: '26-13 21st St, Long Island City, NY 11102',
            date: new Date(2022, 10, 1, 6, 30),
            position: {
                lat: 40.772622670823175,
                lng: -73.92523851984116
            }
        },
        {
            task: 'Work Flow: Requires Location18',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit2.com',
            address: '19-15 24th Rd, Queens, NY 11102',
            date: new Date(2022, 10, 26, 6, 30),
            position: {
                lat: 40.77667507081626,
                lng: -73.92268963518258
            }
        },
        {
            task: 'Work Flow: Requires Location19',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit3.com',
            address: '21-62 28th St, Queens, NY 11105',
            date: new Date(2022, 10, 12, 3, 20),
            position: {
                lat: 40.777946170814054, 
                lng: -73.91189333518189
            }
        },
        {
            task: 'Work Flow: Requires Location20',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit1.com',
            address: '31-07 20th Ave, Queens, NY 11105',
            date: new Date(2022, 10, 18, 12, 30),
            position: {
                lat: 40.780186870810255,
                lng: -73.90511246586779
            }
        },
        {
            task: 'Work Flow: Requires Location21',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu3.com',
            to: 'tracy@zenduit3.com',
            address: '22-60 78th St, Queens, NY 11370',
            date: new Date(2022, 10, 15, 2, 30),
            position: {
                lat: 40.76681467083306,
                lng: -73.89158295053134
            }
        },
        {
            task: 'Work Flow: Requires Location22',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu3.com',
            to: 'tracy@zenduit5.com',
            address: '85-05 Astoria Blvd, Queens, NY 11369',
            date: new Date(2022, 10, 6, 6, 40),
            position: {
                lat: 40.764883220836396, 
                lng: -73.88401891587588
            }
        },
        {
            task: 'Work Flow: Requires Location23',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit5.com',
            address: '25-60 90th St, Queens, NY 11369',
            date: new Date(2022, 10, 11, 8, 30),
            position: {
                lat: 40.76212867084109,
                lng: -73.8792313505338
            }
        },
        {
            task: 'Work Flow: Requires Location24',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit1.com',
            address: '32nd Ave, Flushing, NY 113694',
            date: new Date(2022, 10, 11, 6, 30),
            position: {
                lat: 40.751876647806164, 
                lng: -73.97950684674825
            }
        },
        {
            task: 'Work Flow: Requires Location25',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit2.com',
            address: '86-10 34th Ave, Flushing, NY 11372',
            date: new Date(2022, 10, 21, 6, 30),
            position: {
                lat: 40.75392808010399,
                lng: -73.88090108122526
            }
        },
        {
            task: 'Work Flow: Requires Location26',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit3.com',
            address: '8215 35th Ave #6g, Queens, NY 11372',
            date: new Date(2022, 10, 28, 6, 30),
            position: {
                lat: 40.75211027085828,
                lng: -73.88407203519557
            }
        },
        {
            task: 'Work Flow: Requires Location27',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit4.com',
            address: '83-22 37th Ave, Queens, NY 11372',
            date: new Date(2022, 10, 30, 6, 30),
            position: {
                lat: 40.74972938216416,
                lng: -73.88267846588393
            }
        }
    ]


    public getSubmissions(): Submission[] {
        return this.submissionsData
    }
}