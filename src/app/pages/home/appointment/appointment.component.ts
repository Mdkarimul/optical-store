import { Component } from '@angular/core';
import { ButtonLgComponent } from "../../../shares/components/button-lg/button-lg.component";

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [ButtonLgComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {

}
