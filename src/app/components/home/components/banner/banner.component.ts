import {  Component, OnInit } from '@angular/core';
// import Swiper from 'swiper';
// import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {


  images: string[] = [
    'assets/images/banner-1.jpg'
  ];
  // config: SwiperOptions = {
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //   },
  //   spaceBetween: 40
  // };

  // mySwiper!: Swiper;

  constructor() { }
  ngOnInit(): void {  }
  // ngAfterViewInit(): void {
  //   this.mySwiper = new Swiper('.swiper-container');
  // }




}
