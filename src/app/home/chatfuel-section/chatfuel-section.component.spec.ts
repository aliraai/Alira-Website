import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatfuelSectionComponent } from './chatfuel-section.component';

describe('ChatfuelSectionComponent', () => {
  let component: ChatfuelSectionComponent;
  let fixture: ComponentFixture<ChatfuelSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatfuelSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatfuelSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
