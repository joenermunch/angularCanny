import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicesMenuComponent } from './choices-menu.component';

describe('ChoicesMenuComponent', () => {
  let component: ChoicesMenuComponent;
  let fixture: ComponentFixture<ChoicesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoicesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoicesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
