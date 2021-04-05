
import {Context} from "./algorithmFamilies/ConcreteStrategies";
import {ConcreteStrategyA} from "./algorithmFamilies/StrategyClass/ConcreteStrategyA";

const context = new Context();
context.setStrategy(new ConcreteStrategyA());
context.doSomeBusinessLogic();
