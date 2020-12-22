

export interface Strategy {
    execute(): void;
}

export class ConcreteStrategy1 implements Strategy {
    public execute(): void {
        console.log("`execute` method of ConcreteStrategy1 is being called");
        let oldArray = Array(100);
        console.log(oldArray);
        console.log(oldArray.length);
        let newArray =Array.of(100);
        console.log(newArray);
        console.log(newArray.length);
    }
}

export class ConcreteStrategy2 implements Strategy {
    public execute(): void {
        console.log("`execute` method of ConcreteStrategy2 is being called");
        let myName = "Habib";
        let arrayofLetter = Array.from(myName);
        console.log(arrayofLetter);
    }
}

export class ConcreteStrategy3 implements Strategy {
    public execute(): void {
        console.log("`execute` method of ConcreteStrategy3 is being called");
        let  theNumbers  =[100,300,500,800];
        // Array.fille (Value To Fille, Start Default 0,End Default Array.Length)
        //TheNumbers.fill(100);// All Will be 1000
        theNumbers.fill(100,2,3)
        console.log(theNumbers);
    }
}



export class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {

        this.strategy = strategy;
    }

    public executeStrategy(): void {

        this.strategy.execute();
    }
}

