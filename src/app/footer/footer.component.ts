import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Inameoffeature } from '../interfaces/inameoffeature';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
@Input() links!:Inameoffeature
}
