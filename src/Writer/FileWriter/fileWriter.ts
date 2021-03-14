import {Wirter} from "../wirter";

export class FileWriter implements Wirter{
    write(data: string): string {
        return `${data} files Open`;
    }

}
