import {Wirter} from "../wirter";

export class DbWriter implements Wirter{
    write(data: string): string {
        return `${data}`;
    }

}
