import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
declare var minipdf: any;
declare var pdfform: any;


@Component({
  selector: 'app-pdf-parser',
  templateUrl: './pdf-parser.component.html',
  styleUrls: ['./pdf-parser.component.css']
})
export class PdfParserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testForm: FormGroup;
  payload = {};

  testSubmit(){
    this.payload = this.testForm.value;
    console.log(this.payload);
  }

  //Create the varialbes and objects we will need across all functions
  fileUploaded = false;
  parsedPDF = {};
  file: File;
  fileToParse: File = null;

  //RETRIEVE FILE TO CONVERT
  handleFileInput(files: FileList) {
    this.fileToParse = files.item(0);
    var reader = new FileReader();
    var _this = this
    reader.onload = function () {
      //BEGIN PDF PARSING
      _this.on_file(_this.fileToParse.name, reader.result);
    };
    reader.readAsArrayBuffer(this.fileToParse as Blob);
  }

  on_file(filename, buf) {
    this.list(buf);
  }

  list(buf) {
    try {
      this.parsedPDF = pdfform(minipdf).list_fields(buf);
      console.log(this.parsedPDF);
      this.fileUploaded = true;
    } catch (e) {
      console.log(e);
      return;
    }
  }
}
