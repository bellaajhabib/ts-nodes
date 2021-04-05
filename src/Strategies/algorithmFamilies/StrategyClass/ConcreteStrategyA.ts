
import {Strategy} from "../ConcreteStrategies/StrategyInterface /Strategy";

export class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}
