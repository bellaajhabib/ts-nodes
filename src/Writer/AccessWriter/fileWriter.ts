import {Wirter} from "../wirter";

export class AccessWriter implements Wirter{
    write(data: string): string {
        return `${data} 2017`;
    }

}
