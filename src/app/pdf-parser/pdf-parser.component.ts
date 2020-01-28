import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  fileUploaded = false;
  parsedPDF = {};
  file: File;
  fileToUpload: File = null;

  //UPLOAD FILE
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    var reader = new FileReader();
    var _this = this
    reader.onload = function () {
      //BEGIN PDF PARSING
      _this.on_file(_this.fileToUpload.name, reader.result);
    };
    reader.readAsArrayBuffer(this.fileToUpload as Blob);
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
