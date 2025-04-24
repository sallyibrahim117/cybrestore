import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-carousal',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './carousal.component.html',
  styleUrl: './carousal.component.scss'
})
export class CarousalComponent {

  products = [
  { brand: 'BMW', model: 'M4', image: '/assets/imgs/img-1.jpg' },
  { brand: 'Audi', model: 'RS5', image: '/assets/imgs/img-1.jpg'  },
  { brand: 'Mercedes', model: 'AMG GT', image: '/assets/imgs/img-1.jpg'  },

];

allimgs=signal<any[]>([{im:"/assets/imgs/books.png",name:"books &audios"},

  {im:"/assets/imgs/app.png",name:"applicants"},{im:"/assets/imgs/computers.png",name:"computers"},
  {im:"/assets/imgs/camandvideo.png",name:"camera&videos"},
  {im:"/assets/imgs/camandvideo.png",name:"camera&videos"},
  {im:"/assets/imgs/camandvideo.png",name:"camera&videos"},
  {im:"/assets/imgs/camandvideo.png",name:"camera&videos"},
  {im:"/assets/imgs/gadgets.png",name:"gadgets "},{im:"/assets/imgs/laptopandtablets.png",name:"laptop &tablets"}
])
responsiveOptions: any[] | undefined;



ngOnInit() {

    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}


}

