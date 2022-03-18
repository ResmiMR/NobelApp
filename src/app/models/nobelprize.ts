export interface nobelprize{
    year:number;
    category:string;
    laureates:laureate[];

}

export interface laureate{
    id: string;
    firstname:string;
    surname : string;
    motivation:string;
    share:string;
}
