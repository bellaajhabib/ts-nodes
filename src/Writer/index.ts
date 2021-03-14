import {ContextWriter} from "./ContextWriter";
import {FileWriter} from "./FileWriter/fileWriter";
import {DbWriter} from "./DbWriter/DbWriter";
import {ExcelWriter} from "./ExcelWriter/fileWriter";
import {AccessWriter} from "./AccessWriter/fileWriter";

const contextWriter  = new ContextWriter();

contextWriter.setWriter(new FileWriter() );

contextWriter.write('this...file');


contextWriter.setWriter(new DbWriter());
contextWriter.write( 'this.....DB');

contextWriter.setWriter(new ExcelWriter());
contextWriter.write( 'this.....Excel');

contextWriter.setWriter(new AccessWriter());
contextWriter.write( 'this.....Access');

