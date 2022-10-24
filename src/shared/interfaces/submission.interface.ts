import { SubmissionStatusEnum } from "../enums/submissionEnum";



export interface SubmissionForm {
    task: string,
    status: SubmissionStatusEnum,
    from: string,
    date: Date
}

export interface Submission extends SubmissionForm {
    to: string,
    address: string,
}