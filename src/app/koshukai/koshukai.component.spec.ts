import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoshukaiComponent } from './koshukai.component';

describe('KoshukaiComponent', () => {
  let component: KoshukaiComponent;
  let fixture: ComponentFixture<KoshukaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoshukaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoshukaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
