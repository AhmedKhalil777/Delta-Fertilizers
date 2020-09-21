import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloattingButtonComponent } from './floatting-button.component';

describe('FloattingButtonComponent', () => {
  let component: FloattingButtonComponent;
  let fixture: ComponentFixture<FloattingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloattingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloattingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
