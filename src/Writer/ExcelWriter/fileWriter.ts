import {Wirter} from "../wirter";

export class ExcelWriter implements Wirter{
    write(data: string): string {
        return `${data}`;
    }

}
