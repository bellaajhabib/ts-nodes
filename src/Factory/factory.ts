export interface Product{
    id:string;
    description: string;
    chekInventory():number;
    updateInventory(delta:number):void;
}

class ProductImpl implements Product{
    description: string ;
    id: string;
    inventory :number;
     constructor(id:string,description:string) {
         this.id = id;
         this.description = description;
         this.inventory = 10;
     }
    chekInventory(): number {
        return 0;
    }

    updateInventory(delta: number): void {
    }

}
