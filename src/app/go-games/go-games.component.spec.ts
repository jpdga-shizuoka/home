import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoGamesComponent } from './go-games.component';

describe('GoGamesComponent', () => {
  let component: GoGamesComponent;
  let fixture: ComponentFixture<GoGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
