const date = new Date();

console.log(date);


class myDate {

    year: number;
    month: string;
    day: number;

    constructor(year:number,month:string,day:number) {

        this.year = year;
        this.month = month;
        this.day = day;

    }

}

const initialDay = new myDate(2020,'01',30);

console.log(initialDay);