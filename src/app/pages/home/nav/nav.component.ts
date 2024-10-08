import { Component } from '@angular/core';
import { ButtonLgComponent } from "../../../shares/components/button-lg/button-lg.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ButtonLgComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
