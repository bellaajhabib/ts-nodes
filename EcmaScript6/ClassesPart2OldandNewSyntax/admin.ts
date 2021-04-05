import appClass2 from "./appClass2";


class admin extends appClass2{
    constructor(name: string, age: number) {
        super(name,age);
    }
}

let firstAdmin = new admin('HABIBADMIN',38);
firstAdmin.getInfo();
