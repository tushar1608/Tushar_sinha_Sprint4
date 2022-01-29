export interface Task {
    id: string;
    projectId: string;
    status: number;
    assignedToUserId: string;
    detail: string;
    createdOn: string;
}