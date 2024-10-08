import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSmComponent } from './button-sm.component';

describe('ButtonSmComponent', () => {
  let component: ButtonSmComponent;
  let fixture: ComponentFixture<ButtonSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
