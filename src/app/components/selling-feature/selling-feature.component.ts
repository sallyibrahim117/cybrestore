import { Component, Input } from '@angular/core';
import { Irelease } from '../../interfaces/irelease';

@Component({
  selector: 'app-selling-feature',
  standalone: true,
  imports: [],
  templateUrl: './selling-feature.component.html',
  styleUrl: './selling-feature.component.scss'
})
export class SellingFeatureComponent {
@Input()sellingFeatur!:Irelease
}
