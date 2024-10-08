import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLgComponent } from './button-lg.component';

describe('ButtonLgComponent', () => {
  let component: ButtonLgComponent;
  let fixture: ComponentFixture<ButtonLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
