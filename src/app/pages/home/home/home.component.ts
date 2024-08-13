import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';
import { ServicesComponent } from '../services/services.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { AppointmentComponent } from "../appointment/appointment.component";
import { BlogComponent } from "../blog/blog.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HeaderComponent, ServicesComponent, FooterComponent, AboutComponent, AppointmentComponent, BlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
