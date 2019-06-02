export interface IUser{
    id:number,
    name:string,
    cardNumber:string,
    cardType:string
}

export interface IConfig{
    adminName:string;
    permission?:string[];
}

export interface HttpIUser{
    users:IUser[]
}