import { Component, Input } from '@angular/core';
import { Iproduct } from '../../../../interfaces/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
@Input() product !:Iproduct
}
