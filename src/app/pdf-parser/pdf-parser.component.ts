import { Component, OnInit } from '@angular/core';
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


  initiateParse(e){
    var file = e.target.files[0];
    var reader = new FileReader();
    var _this = this
		reader.onload = function() {
			_this.on_file(file.name, reader.result);
    };
		reader.readAsArrayBuffer(file);
  }

  current_buffer = 'string'

  on_file(filename, buf) {
    this.current_buffer = buf;

    this.list(this.current_buffer);
  }

  list(buf) {
    try {
      this.parsedPDF = minipdf.list_fields(buf);
      this.fileUploaded = true;
    } catch (e) {
      // on_error(e);
      return;
    }
  }
}
