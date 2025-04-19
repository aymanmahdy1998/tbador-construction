import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  slides = [
    {
      image: 'assets/images/Image.jpg',
      alt: 'صورة 1',
      title: 'مرحبا بكم في تبادر للمقاولات',
      description: 'نحن نقدم حلولاً هندسية متكاملة ومشاريع إنشائية عالية الجودة',
      link: '/contact-us',
      buttonText: 'تواصل معنا الآن'
    },
    {
      image: 'assets/images/slider2.jpg',
      alt: 'صورة 2',
      title: 'خبرة تتجاوز التوقعات',
      description: 'ننفذ المشاريع بجودة واحترافية عالية من التخطيط إلى التسليم',
      link: '/projects',
      buttonText: 'استعرض مشاريعنا'
    },
    {
      image: 'assets/images/slider3.jpg',
      alt: 'صورة 3',
      title: 'بُنية تحتية قوية',
      description: 'تبادر توفر حلول مبتكرة للمباني والمشاريع العملاقة',
      link: '/services',
      buttonText: 'تعرف على خدماتنا'
    }
  ];

  ngAfterViewInit() {
    this.initCarouselBehavior();
  }

  private preloadImages() {
    this.slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }

  private initCarouselBehavior() {
    const carousel = document.getElementById('heroCarousel');

    if (carousel) {
      this.preloadImages();

      carousel.addEventListener('slide.bs.carousel', (e: Event) => {
        const carouselEvent = e as unknown as { relatedTarget: HTMLElement };
        const items = document.querySelectorAll('#heroCarousel .carousel-item');

        items.forEach(item => {
          item.classList.remove('active');
          item.classList.remove('carousel-item-start');
          item.classList.remove('carousel-item-end');
        });

        carouselEvent.relatedTarget.classList.add('active');
      });

      carousel.addEventListener('slid.bs.carousel', () => {
        const activeItem = document.querySelector<HTMLElement>('#heroCarousel .carousel-item.active');
        const captions = activeItem?.querySelectorAll<HTMLElement>('.animate__animated');

        captions?.forEach(caption => {
          caption.style.animation = 'none';
          void caption.offsetWidth;
          caption.style.animation = '';
        });
      });
    }
  }
}
