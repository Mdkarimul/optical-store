import { isPlatformBrowser, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';

interface carouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,NgClass,NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit,OnDestroy {


  @Input() images: carouselImages[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() SlideInterval = 8000;
  selectedIndex: number = 0;
  inter: any;
  isBrowser = signal(false);

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId)); // save isPlatformBrowser in signal
  }

  ngOnInit(): void {
    if (this.isBrowser() && this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages() {
    this.inter = setInterval(() => {
      this.onNext();
    }, 8000);
  }

  selectImage(i: number) {
    this.selectedIndex = i;
  }

  onNext() {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectedIndex++;
    } else {
      this.selectedIndex = 0;
    }
  }
  onPrev() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    } else {
      this.selectedIndex = this.images.length - 1;
    }
  }

  ngOnDestroy() {
    clearInterval(this.inter);
  }

}
