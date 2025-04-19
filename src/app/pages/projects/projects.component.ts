import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [NgFor],
})
export class ProjectsComponent {
  projects = [
    { id: 1, name: 'مركز يا سلام التجاري', value: 6800000, year: '2012' },
    { id: 2, name: 'مركز الميزان التجاري', value: 4300000, year: '2013' },
    { id: 3, name: 'مركز التخصصي التجاري', value: 7200000, year: '2014' },
    { id: 4, name: 'مركز مشاعل الذهب التجاري', value: 12500000, year: '2015' },
    { id: 5, name: 'مركز الخير التجاري والسكني', value: 12800000, year: '2016' },
    { id: 6, name: 'جامع الياسمين مع الفلل المرفقة', value: 3000000, year: '2017' },
    { id: 7, name: 'مركز الملك عبد العزيز التاريخي', value: 600000, year: '2018' },
    { id: 8, name: 'مشروع فيلا سكنية بالفيلا', value: 2500000, year: '2018' },
    { id: 9, name: 'مشروع مسجد الفرسان بالدمام', value: 2800000, year: '2019' },
    { id: 10, name: 'مشروع وقف الموسى', value: 1693000, year: '2019' },
    { id: 11, name: 'مشروع استاد الخرج', value: 2000000, year: '2019' },
    { id: 12, name: 'مشروع عمائر مخرج 2', value: 1000000, year: '2020' },
    { id: 13, name: 'مشروع جامعة الإمام', value: 2300000, year: '2021' },
    { id: 14, name: 'مشروع واحة الدمام', value: 1500000, year: '2022' },
    { id: 15, name: 'مشروع إسكان الكلية', value: 6000000, year: '2022' }
  ];

  waqfImages = [
    { src: 'assets/images/waqf-mousa-1.jpg', alt: 'وقف الموسى' },
    { src: 'assets/images/waqf-mousa-2.jpg', alt: 'وقف الموسى' },
    { src: 'assets/images/waqf-mousa-3.jpg', alt: 'وقف الموسى' }
  ];

  mosqueImages = [
    { src: 'assets/images/al-fursan-mosque-1.jpg', alt: 'مسجد الفرسان' },
    { src: 'assets/images/al-fursan-mosque-2.jpg', alt: 'مسجد الفرسان' },
    { src: 'assets/images/al-fursan-mosque-3.jpg', alt: 'مسجد الفرسان' }
  ];
  nargesImages = [
    { src: 'assets/images/Narges-1.jpg', alt: 'عمارة النرجس' },
    { src: 'assets/images/Narges-2.jpg', alt: 'عمارة النرجس' },
    { src: 'assets/images/Narges-3.jpg', alt: 'عمارة النرجس' }
  ];
  hassaImages = [
    { src: 'assets/images/hasa-1.jpg', alt: 'عمارة النرجس' },
    { src: 'assets/images/hasa-2.jpg', alt: 'عمارة النرجس' },
    { src: 'assets/images/hasa-3.jpg', alt: 'عمارة النرجس' }
  ];
  houdaImages = [
    { src: 'assets/images/houda-1.jpg', alt: 'عمارة النرجس' },
    { src: 'assets/images/houda-2.jpg', alt: 'عمارة النرجس' },
    { src: 'assets/images/houda-3.jpg', alt: 'عمارة النرجس' }
  ];

  openImage(imageSrc: string) {
    // Implement image viewer modal logic here
    console.log('Opening image:', imageSrc);
    // You can use a modal service or library like ngx-image-viewer
  }
}
