import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewesletterComponent } from './newesletter.component';

describe('NewesletterComponent', () => {
  let component: NewesletterComponent;
  let fixture: ComponentFixture<NewesletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewesletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewesletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
