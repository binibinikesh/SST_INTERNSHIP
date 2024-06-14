class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){

        const date=new Date();
        return date.getFullYear()-this.year;
    }
}
    const mycar=new car("Ford",2023);
    console.log("my car is "+mycar.age()+" years old");
