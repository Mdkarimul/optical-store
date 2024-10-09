import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';
import { ServicesComponent } from '../services/services.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { AppointmentComponent } from "../appointment/appointment.component";
import { BlogComponent } from "../blog/blog.component";
import { FeedbackComponent } from "../feedback/feedback.component";
import { fromEvent,Observable } from 'rxjs';
import { FaqComponent } from "../faq/faq.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HeaderComponent, ServicesComponent, FooterComponent, AboutComponent, AppointmentComponent, BlogComponent, FeedbackComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 

  images = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      imageAlt: 'Sunset over a mountain landscape',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      imageAlt: 'Coding on a laptop with coffee',
    },
    // {
    //   imageSrc: 'https://images.unsplash.com/photo-1531497865144-0464a82c8746',
    //   imageAlt: 'Forest with tall trees in the mist',
    // },
    {
      imageSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      imageAlt: 'Open book and reading glasses',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
      imageAlt: 'City skyline during golden hour',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd',
      imageAlt: 'Work desk with gadgets and notebook',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
      imageAlt: 'Person hiking in the mountains',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1542831371-d531d36971e6',
      imageAlt: 'White building in Santorini, Greece',
    },

    {
      imageSrc: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
      imageAlt: 'Vintage camera on a wooden table',
    },
  ];

}
