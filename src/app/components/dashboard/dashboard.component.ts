import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.hidePreloader();
    this.onScroll();
    this.setTitle();
  }

  hidePreloader() {
    const preloaderFadeOutTime = 500;
    const preloader = $('.spinner-wrapper');
    setTimeout(() => {
      preloader.fadeOut(preloaderFadeOutTime);
    }, 500);
  }

  setTitle() {
    this.titleService.setTitle('DOTA2 Picker - Home');
  }

  onScroll() {
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', () => {
      if ($('.navbar').offset().top > 20) {
        $('.fixed-top').addClass('top-nav-collapse');
      } else {
        $('.fixed-top').removeClass('top-nav-collapse');
      }
    });
  }

}
