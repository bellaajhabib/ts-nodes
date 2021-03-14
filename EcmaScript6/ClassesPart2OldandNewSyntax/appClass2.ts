

class appClass {
    private names: string;
    private ages: number;

    constructor(name:string, age:number) {
        this.names = name;
        this.ages = age;
    }
    getInfo(){
        console.log(`Hello ${this.names}`);
    }

}

const firstUser = new appClass('Habib',4);
console.log(firstUser.getInfo());
