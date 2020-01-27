import { Component, OnInit } from '@angular/core';

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

  dummyPDFObj = {
    "Given Name Text Box": [
      {
        "type": "string"
      }
    ],
    "Family Name Text Box": [
      {
        "type": "string"
      }
    ],
    "House nr Text Box": [
      {
        "type": "string"
      }
    ],
    "Address 2 Text Box": [
      {
        "type": "string"
      }
    ],
    "Postcode Text Box": [
      {
        "type": "string"
      }
    ],
    "Country Combo Box": [
      {
        "type": "select",
        "options": [
          "USA",
          "UK",
          "Canada"
        ]
      }
    ],
    "Height Formatted Field": [
      {
        "type": "string"
      }
    ],
    "City Text Box": [
      {
        "type": "string"
      }
    ],
    "Driving License Check Box": [
      {
        "type": "boolean"
      }
    ],
    "Favourite Colour List Box": [
      {
        "type": "select",
        "options": [
          "Black",
          "Brown",
          "Red",
          "Orange",
          "Yellow",
          "Green",
          "Blue",
          "Violet",
          "Grey",
          "White"
        ]
      }
    ],
    "Language 1 Check Box": [
      {
        "type": "boolean"
      }
    ],
    "Language 2 Check Box": [
      {
        "type": "boolean"
      }
    ],
    "Language 3 Check Box": [
      {
        "type": "boolean"
      }
    ],
    "Language 4 Check Box": [
      {
        "type": "boolean"
      }
    ],
    "Language 5 Check Box": [
      {
        "type": "boolean"
      }
    ],
    "Gender List Box": [
      {
        "type": "select",
        "options": [
          "Man",
          "Woman"
        ]
      }
    ],
    "Address 1 Text Box": [
      {
        "type": "string"
      }
    ]
  }
}
