import {Wirter} from "./wirter";
import {Strategy} from "../Strategies/algorithmFamilies/ConcreteStrategies/StrategyInterface /Strategy";

export  class ContextWriter {
    private wirter?:Wirter;

    constructor() {
    }
    setWriter(writer:Wirter){
       this.wirter = writer;
    }

    write(datas: string){
      console.log(this.wirter?.write(datas))
    }
}
