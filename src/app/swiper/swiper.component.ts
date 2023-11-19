import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // Initialize Swiper when the view has been initialized
    const mySwiper = new Swiper('.swiper-container', {
      // Swiper options and configurations go here
      slidesPerView: 1,});}
}
