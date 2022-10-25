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
        },
        {
            task: 'Work Flow: Requires Location28',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit.com',
            address: '156 Wooster St, New York, NY 10012',
            date: new Date(2022, 11, 5, 15, 0),
            position: {
                lat: 40.5563482980328, 
                lng: -73.9359206371164
            }
        },
        {
            task: 'Work Flow: Requires Location29',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit.com',
            address: '665 Broadway, New York, NY 10012',
            date: new Date(2022, 9, 15, 12, 30),
            position: {
                lat: 40.77397365128879,
                lng: -74.02701144208736
            }
        },
        {
            task: 'Work Flow: Requires Location30',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit.com',
            address: '25 E 4th St, New York, NY 10003',
            date: new Date(2022, 10, 23, 18, 30),
            position: {
                lat: 40.78053821327067,
                lng: -74.01593928362384
            }
        },
        {
            task: 'Work Flow: Requires Location31',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit3.com',
            address: '145 2nd Ave, New York, NY 10003',
            date: new Date(2022, 10, 7, 15, 30),
            position: {
                lat: 40.782552948720586,
                lng: -74.02958636266027
            }
        },
        {
            task: 'Work Flow: Requires Location32',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu3.com',
            to: 'tracy@zenduit1.com',
            address: '298 1st Ave., New York, NY 10009',
            date: new Date(2022, 9, 1, 6, 30),
            position: {
                lat: 40.77325865982181,
                lng: -74.01156191864987
            }
        },
        {
            task: 'Work Flow: Requires Location33',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit5.com',
            address: '510 E 23rd St, New York, NY 10010',
            date: new Date(2022, 10, 9, 12, 5),
            position: {
                lat: 40.784112701936266,
                lng: -74.01267771756483
            }
        },
        {
            task: 'Work Flow: Requires Location34',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit2.com',
            address: '271 11th Ave, New York, NY 10001',
            date: new Date(2022, 10, 9, 6, 30),
            position: {
                lat: 40.759607347153306,
                lng: -74.0465808384415
            }
        },
        {
            task: 'Work Flow: Requires Location35',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit13.com',
            address: '662 9th Ave, New York, NY 10036',
            date: new Date(2022, 9, 11, 6, 50),
            position: {
                lat: 40.74054256738515,
                lng: -74.04848242261237
            }
        },
        {
            task: 'Work Flow: Requires Location36',
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
            task: 'Work Flow: Requires Location37',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu5.com',
            to: 'tracy@zenduit13.com',
            address: '810 Seventh Avenue, New York, NY 10019',
            date: new Date(2022, 9, 24, 22, 30),
            position: {
                lat: 40.737816427199,
                lng: -74.0067882909171
            }
        },
        {
            task: 'Work Flow: Requires Location38',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu5.com',
            to: 'tracy@zenduit2.com',
            address: 'Burlington House, 1343 6th Ave, New York, NY 10105',
            date: new Date(2022, 10, 5, 6, 30),
            position: {
                lat:40.73043925242647,
                lng: -74.06985860180639
            }
        },
        {
            task: 'Work Flow: Requires Location39',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu5.com',
            to: 'tracy@zenduit5.com',
            address: 'Genewral-Motors-Building, New York, NY 10022',
            date: new Date(2022, 10, 3, 6, 30),
            position: {
                lat: 40.72161764368803,
                lng: -74.06287430563408
            }
        },
        {
            task: 'Work Flow: Requires Location40',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit.com',
            address: '797 Lexington Ave Suite 3R, New York, NY 10002',
            date: new Date(2022, 10, 12, 6, 30),
            position: {
                lat: 40.72081562127424,
                lng: -74.06901202045216
            }
        },        
        {
            task: 'Work Flow: Requires Location41',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit6.com',
            address: '1339 York Ave, New York, NY 10021',
            date: new Date(2022, 10, 10, 6, 30),
            position: {
                lat:40.72947695193378,
                lng: -74.0721867005305
            }
        },
        {
            task: 'Work Flow: Requires Location42',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit1.com',
            address: '750 Main St, New York, NY 10044',
            date: new Date(2022, 10, 5, 6, 30),
            position: {
                lat: 40.71921154745572,
                lng: -73.98117920495197
            }
        },
        {
            task: 'Work Flow: Requires Location43',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit3.com',
            address: '2106 30th Ave., Queens, NY 11102',
            date: new Date(2022, 10, 3, 6, 30),
            position: {
                lat: 40.79520213331699,
                lng: -74.00467183753155
            }
        },
        {
            task: 'Work Flow: Requires Location44',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu3.com',
            to: 'tracy@zenduit1.com',
            address: '26-13 21st St, Long Island City, NY 11102',
            date: new Date(2022, 10, 1, 6, 30),
            position: {
                lat: 40.722580057828495,
                lng: -74.06266266029552
            }
        },
        {
            task: 'Work Flow: Requires Location45',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit2.com',
            address: '19-15 24th Rd, Queens, NY 11102',
            date: new Date(2022, 10, 26, 6, 30),
            position: {
                lat: 40.81570790151607,
                lng: -73.98774021046046
            }
        },
        {
            task: 'Work Flow: Requires Location46',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit3.com',
            address: '21-62 28th St, Queens, NY 11105',
            date: new Date(2022, 10, 12, 3, 20),
            position: {
                lat:40.83220403551839,
                lng: -73.9007539746823
            }
        },
        {
            task: 'Work Flow: Requires Location47',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit1.com',
            address: '31-07 20th Ave, Queens, NY 11105',
            date: new Date(2022, 10, 18, 12, 30),
            position: {
                lat: 40.78991446327486,
                lng: -73.88382234591886
            }
        },
        {
            task: 'Work Flow: Requires Location48',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu3.com',
            to: 'tracy@zenduit3.com',
            address: '22-60 78th St, Queens, NY 11370',
            date: new Date(2022, 10, 15, 2, 30),
            position: {
                lat: 40.78799156962335,
                lng: -73.84911251039588
            }
        },
        {
            task: 'Work Flow: Requires Location49',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu3.com',
            to: 'tracy@zenduit5.com',
            address: '85-05 Astoria Blvd, Queens, NY 11369',
            date: new Date(2022, 10, 6, 6, 40),
            position: {
                lat: 40.769400726685426,
                lng: -73.8258315219709
            }
        },
        {
            task: 'Work Flow: Requires Location50',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit5.com',
            address: '25-60 90th St, Queens, NY 11369',
            date: new Date(2022, 10, 11, 8, 30),
            position: {
                lat: 40.70794075963183,
                lng: -73.75958836237486
            }
        },
        {
            task: 'Work Flow: Requires Location51',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit1.com',
            address: '32nd Ave, Flushing, NY 113694',
            date: new Date(2022, 10, 11, 6, 30),
            position: {
                lat: 40.676500210255774,
                lng: -73.63664499797608
            }
        },
        {
            task: 'Work Flow: Requires Location52',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit2.com',
            address: '86-10 34th Ave, Flushing, NY 11372',
            date: new Date(2022, 10, 21, 6, 30),
            position: {
                lat: 40.70242594597763,
                lng: -73.53261599618307
            }
        },
        {
            task: 'Work Flow: Requires Location53',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit3.com',
            address: '8215 35th Ave #6g, Queens, NY 11372',
            date: new Date(2022, 10, 28, 6, 30),
            position: {
                lat: 40.7465316589399,
                lng: -73.52643245433644
            }
        },
        {
            task: 'Work Flow: Requires Location54',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit4.com',
            address: '83-22 37th Ave, Queens, NY 11372',
            date: new Date(2022, 10, 30, 6, 30),
            position: {
                lat: 40.656083493767476,
                lng: -73.52643245433644
            }
        },
        {
            task: 'Work Flow: Requires Location55',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit.com',
            address: '156 Wooster St, New York, NY 10012',
            date: new Date(2022, 11, 5, 15, 0),
            position: {
                lat: 40.71455793072673,
                lng: -73.5162477971773
            }
        },
        {
            task: 'Work Flow: Requires Location56',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit.com',
            address: '665 Broadway, New York, NY 10012',
            date: new Date(2022, 9, 15, 12, 30),
            position: {
                lat: 40.6409648341647,
                lng: -73.68612424870201
            }
        },
        {
            task: 'Work Flow: Requires Location57',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit.com',
            address: '25 E 4th St, New York, NY 10003',
            date: new Date(2022, 10, 23, 18, 30),
            position: {
                lat: 40.751360001855886,
                lng: -73.40326256282788
            }
        },
        {
            task: 'Work Flow: Requires Location58',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit3.com',
            address: '145 2nd Ave, New York, NY 10003',
            date: new Date(2022, 10, 7, 15, 30),
            position: {
                lat: 40.76954378660626,
                lng: -73.37038380643905
            }
        },
        {
            task: 'Work Flow: Requires Location59',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu3.com',
            to: 'tracy@zenduit1.com',
            address: '298 1st Ave., New York, NY 10009',
            date: new Date(2022, 9, 1, 6, 30),
            position: {
                lat: 40.68490740432494,
                lng: -73.54104020864771
            }
        },
        {
            task: 'Work Flow: Requires Location60',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit5.com',
            address: '510 E 23rd St, New York, NY 10010',
            date: new Date(2022, 10, 9, 12, 5),
            position: {
                lat: 40.67303388914129,
                lng: -73.35785856590998
            }
        },
        {
            task: 'Work Flow: Requires Location61',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit2.com',
            address: '271 11th Ave, New York, NY 10001',
            date: new Date(2022, 10, 9, 6, 30),
            position: {
                lat: 40.60888036700819,
                lng: -73.45231975490009
            }
        },
        {
            task: 'Work Flow: Requires Location62',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit13.com',
            address: '662 9th Ave, New York, NY 10036',
            date: new Date(2022, 9, 11, 6, 50),
            position: {
                lat: 40.6433408492772,
                lng: -73.614104111734
            }
        },
        {
            task: 'Work Flow: Requires Location63',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu6.com',
            to: 'tracy@zenduit13.com',
            address: '807 8th Ave, New York, NY 10019',
            date: new Date(2022, 10, 8, 6, 30),
            position: {
                lat: 40.707065640642625,
                lng: -73.62715123728512
            }
        },

        {
            task: 'Work Flow: Requires Location64',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu5.com',
            to: 'tracy@zenduit13.com',
            address: '810 Seventh Avenue, New York, NY 10019',
            date: new Date(2022, 9, 24, 22, 30),
            position: {
                lat: 40.71616421025577,
                lng: -73.70491211045236
            }
        },
        {
            task: 'Work Flow: Requires Location65',
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
            task: 'Work Flow: Requires Location66',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu5.com',
            to: 'tracy@zenduit5.com',
            address: 'Genewral-Motors-Building, New York, NY 10022',
            date: new Date(2022, 10, 3, 6, 30),
            position: {
                lat: 40.76084781503032,
                lng: -73.67255523908558
            }
        },
        {
            task: 'Work Flow: Requires Location67',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit.com',
            address: '797 Lexington Ave Suite 3R, New York, NY 10002',
            date: new Date(2022, 10, 12, 6, 30),
            position: {
                lat:40.806686486154966,
                lng: -73.57339708489705
            }
        },        
        {
            task: 'Work Flow: Requires Location68',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit6.com',
            address: '1339 York Ave, New York, NY 10021',
            date: new Date(2022, 10, 10, 6, 30),
            position: {
                lat: 40.817746252824534,
                lng: -73.51390219238392
            }
        },
        {
            task: 'Work Flow: Requires Location69',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit1.com',
            address: '750 Main St, New York, NY 10044',
            date: new Date(2022, 10, 5, 6, 30),
            position: {
                lat: 40.65007243048013,
                lng: -73.7764103584725
            }
        },
        {
            task: 'Work Flow: Requires Location70',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit3.com',
            address: '2106 30th Ave., Queens, NY 11102',
            date: new Date(2022, 10, 3, 6, 30),
            position: {
                lat: 40.696383125828255,
                lng: -73.75710061265684
            }
        },
        {
            task: 'Work Flow: Requires Location71',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu3.com',
            to: 'tracy@zenduit1.com',
            address: '26-13 21st St, Long Island City, NY 11102',
            date: new Date(2022, 10, 1, 6, 30),
            position: {
                lat: 40.805106368995354,
                lng: -73.50763957211939
            }
        },
        {
            task: 'Work Flow: Requires Location72',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit2.com',
            address: '19-15 24th Rd, Queens, NY 11102',
            date: new Date(2022, 10, 26, 6, 30),
            position: {
                lat: 40.77823862133406,
                lng: -73.51285842233985
            }
        },
        {
            task: 'Work Flow: Requires Location73',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit3.com',
            address: '21-62 28th St, Queens, NY 11105',
            date: new Date(2022, 10, 12, 3, 20),
            position: {
                lat: 40.83512216128133,
                lng: -73.51390219238392
            }
        },
        {
            task: 'Work Flow: Requires Location74',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit1.com',
            address: '31-07 20th Ave, Queens, NY 11105',
            date: new Date(2022, 10, 18, 12, 30),
            position: {
                lat: 40.678575126583304,
                lng: -73.7717133932741
            }
        },
        {
            task: 'Work Flow: Requires Location75',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu3.com',
            to: 'tracy@zenduit3.com',
            address: '22-60 78th St, Queens, NY 11370',
            date: new Date(2022, 10, 15, 2, 30),
            position: {
                lat: 40.680554028157644,
                lng: -73.81659550516996
            }
        },
        {
            task: 'Work Flow: Requires Location76',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu3.com',
            to: 'tracy@zenduit5.com',
            address: '85-05 Astoria Blvd, Queens, NY 11369',
            date: new Date(2022, 10, 6, 6, 40),
            position: {
                lat: 40.66234591652059,
                lng: -73.9089691635236
            }
        },
        {
            task: 'Work Flow: Requires Location77',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit5.com',
            address: '25-60 90th St, Queens, NY 11369',
            date: new Date(2022, 10, 11, 8, 30),
            position: {
                lat: 40.60333334043753,
                lng: -73.9799455265217
            }
        },
        {
            task: 'Work Flow: Requires Location78',
            status: SubmissionStatusEnum.LOW,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit1.com',
            address: '32nd Ave, Flushing, NY 113694',
            date: new Date(2022, 10, 11, 6, 30),
            position: {
                lat: 40.6750129543947,
                lng: -73.87609040713477
            }
        },
        {
            task: 'Work Flow: Requires Location79',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu2.com',
            to: 'tracy@zenduit2.com',
            address: '86-10 34th Ave, Flushing, NY 11372',
            date: new Date(2022, 10, 21, 6, 30),
            position: {
                lat: 40.62353814657891,
                lng: -74.00499600757985
            }
        },
        {
            task: 'Work Flow: Requires Location80',
            status: SubmissionStatusEnum.UNCOMPLETE,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit3.com',
            address: '8215 35th Ave #6g, Queens, NY 11372',
            date: new Date(2022, 10, 28, 6, 30),
            position: {
                lat: 40.6046818719422,
                lng: -74.05160547054214
            }
        },
        {
            task: 'Work Flow: Requires Location81',
            status: SubmissionStatusEnum.UNASSIGNED,
            from: 'zendu@zendu1.com',
            to: 'tracy@zenduit4.com',
            address: '83-22 37th Ave, Queens, NY 11372',
            date: new Date(2022, 10, 30, 6, 30),
            position: {
                lat: 40.67304728848433,
                lng: -73.95484082693434
            }
        },
        
    ]


    public getSubmissions(): Submission[] {
        return this.submissionsData
    }
}