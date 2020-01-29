import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { element } from 'protractor';

declare var minipdf: any;
declare var pdfform: any;


@Component({
  selector: 'app-pdf-parser',
  templateUrl: './pdf-parser.component.html',
  styleUrls: ['./pdf-parser.component.css']
})
export class PdfParserComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  
  testSubmit(){
    var parsedPDFString = JSON.stringify(this.parsedPDF);
    this.results = JSON.parse(parsedPDFString);
    const keys = Object.keys(this.results);
    keys.forEach(key => {
      if(this.results[key].length == 2){
        this.results[key].forEach(item => {
          if((typeof item) != "string"){
            console.log('This is not a string')
            console.log(item)
            var itemIndex = this.results[key].indexOf(item)
            this.results[key].splice(itemIndex, 1);
          }
        });
      } else {
        delete this.results[key]
      }
    });
    console.log(this.results);

    var filled_pdf; // Uint8Array
    try {
      filled_pdf = pdfform(minipdf).transform(this.buffer, this.results);
    } catch (e) {
      console.log(e)
    }
  
  
    var blob = new Blob([filled_pdf], {type: 'application/pdf'});
    var url = window.URL.createObjectURL(blob);
    window.open(url)
  }

  //Create the varialbes and objects we will need across all functions
  buffer;
  fileUploaded = false;
  parsedPDF = {};
  results = {};
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
    this.buffer = buf;
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
