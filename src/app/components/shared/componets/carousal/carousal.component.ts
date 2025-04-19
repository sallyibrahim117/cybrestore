import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-carousal',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './carousal.component.html',
  styleUrl: './carousal.component.scss'
})
export class CarousalComponent {
  @Input()
  // course!: Icourse;
cars = [
  { brand: 'BMW', model: 'M4', image: '/assets/imgs/img-1.jpg' },
  { brand: 'Audi', model: 'RS5', image: '/assets/imgs/img-1.jpg'  },
  { brand: 'Mercedes', model: 'AMG GT', image: '/assets/imgs/img-1.jpg'  },

];
}
