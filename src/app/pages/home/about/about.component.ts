import { Component } from '@angular/core';
import { ButtonLgComponent } from "../../../shares/components/button-lg/button-lg.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonLgComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
