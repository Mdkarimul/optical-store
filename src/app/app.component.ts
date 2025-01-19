
import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'optical';


  ngAfterViewInit(){

    fromEvent(document,'click').subscribe(()=>{
      console.log("Hellow karimul");
    })

  }
}
