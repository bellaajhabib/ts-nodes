"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContextWriter_1 = require("./ContextWriter");
var fileWriter_1 = require("./FileWriter/fileWriter");
var DbWriter_1 = require("./DbWriter/DbWriter");
var fileWriter_2 = require("./ExcelWriter/fileWriter");
var fileWriter_3 = require("./AccessWriter/fileWriter");
var contextWriter = new ContextWriter_1.ContextWriter();
contextWriter.setWriter(new fileWriter_1.FileWriter());
contextWriter.write('this...file');
contextWriter.setWriter(new DbWriter_1.DbWriter());
contextWriter.write('this.....DB');
contextWriter.setWriter(new fileWriter_2.ExcelWriter());
contextWriter.write('this.....Excel');
contextWriter.setWriter(new fileWriter_3.AccessWriter());
contextWriter.write('this.....Access');
//# sourceMappingURL=index.js.map