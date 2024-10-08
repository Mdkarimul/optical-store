import { NgClass } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-button-lg',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button-lg.component.html',
  styleUrl: './button-lg.component.scss'
})
export class ButtonLgComponent {

  @Input() btnText = '';
  @Input() color='btn-primary';

}
