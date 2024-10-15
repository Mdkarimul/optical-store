import { Component } from '@angular/core';
import { ButtonLgComponent } from "../../../shares/components/button-lg/button-lg.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ButtonLgComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
