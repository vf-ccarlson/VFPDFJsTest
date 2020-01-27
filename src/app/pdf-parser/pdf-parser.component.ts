import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { miniPdf } from '../../pdfParse/minipdf.js';
import * as miniPdf from '../../pdfParse/minipdf.js'
declare var minipdf: any;



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
  fileBlob: Blob;


  initiateParse(e: NgForm) {
    console.log('hittin da initiate');
    console.log(e);
    var file = this.file;
    var reader = new FileReader();
    var _this = this
    reader.onload = function () {
      _this.on_file(file.name, reader.result);
    };
    reader.readAsArrayBuffer(file);
    console.log(file);
  }

  current_buffer = 'string'

  on_file(filename, buf) {
    this.current_buffer = buf;

    this.list(this.current_buffer);
  }

  list(buf) {
    try {
      this.parsedPDF = miniPdf.list_fields(buf);
      this.fileUploaded = true;
    } catch (e) {
      // on_error(e);
      return;
    }
  }

  changeFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  uploadFile(event) {
    if (event.target.value) {
      const file = event.target.files[0];
      const type = file.type;
      this.changeFile(file).then((base64: string): any => {
        console.log(base64);
        this.fileBlob = this.b64Blob([base64], type);
        console.log(this.fileBlob)
      });
    } else alert('Nothing')
  }
}
