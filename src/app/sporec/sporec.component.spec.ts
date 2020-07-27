import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SporecComponent } from './sporec.component';

describe('SporecComponent', () => {
  let component: SporecComponent;
  let fixture: ComponentFixture<SporecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SporecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SporecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
