

class appClass2 {
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
export default appClass2;


