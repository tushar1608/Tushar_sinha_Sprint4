export interface User {
    id:string;
    firstName:string;
    lastName:string;
    email: Email;
    password: string;
}
interface Email {
    emailAddress: string;
}