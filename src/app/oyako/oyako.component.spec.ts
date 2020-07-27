import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OyakoComponent } from './oyako.component';

describe('OyakoComponent', () => {
  let component: OyakoComponent;
  let fixture: ComponentFixture<OyakoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OyakoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OyakoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
