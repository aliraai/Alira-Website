import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialBandComponent } from './social-band.component';

describe('SocialBandComponent', () => {
  let component: SocialBandComponent;
  let fixture: ComponentFixture<SocialBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
