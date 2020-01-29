# pdfform.js

Fill out PDF forms in JavaScript, both in the browser or on the server.

pdfform.js can function with a slightly customized version of [pdf.js](https://github.com/mozilla/pdf.js). However, due to the size and scope of PDF.js (1600KB+), by default a built-in PDF library (called minipdf) is used.

The [online demo](https://phihag.github.io/pdfform.js/docs/demo.html) demonstrates *both* (not recommended in actual production).

## Installation

To test, download/clone this repository and add `minipdf.js` and `pdfform.js` to your JavaScript files. You'll also need the [pako](https://github.com/nodeca/pako) library.

## Usage

Currently, PDFs are parsed by running `handleFileInput` in `pdf-parser.component.ts` when a PDF is uploaded. After uploading, the PDF is converted to an object that is broken apart via `pdfform()` using `minipdf` in the `list()` method, and assigned to `parsedPDF`.

When the form is submitted, `testSubmit` takes all inputs, converts the object to a new object that can be read by `pdfform` to rebuild the original PDF with all filled in fields populated.

Console logs will show the format of the parsedPDF object as well as how the final object should be formatted.

## Additional Plans

The base PDFs will be created internally by another department at VF.

Ideally, we would like to remove the need for a file input field, and simply have the applicant invite system automatically feed the correct PDF into `handleFileInput()`, and send filled PDF to the correct endpoint instead of opening the PDF.

Additionally, we will need to build a digital signature file at the end of `testSubmit()` that displays IP Address, full name, and date/time. This signature input will need to be added into the end of the dynamic form as well as any legal requirements to be determined at a later date. 

For more details, have a look at the base code this is based on at [The following github repo](https://github.com/phihag/pdfform.js/blob/master/docs/demo.js).