import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfParserComponent } from './pdf-parser.component';

describe('PdfParserComponent', () => {
  let component: PdfParserComponent;
  let fixture: ComponentFixture<PdfParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
