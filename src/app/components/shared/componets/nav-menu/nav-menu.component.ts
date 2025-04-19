import { Component, Input } from '@angular/core';
import { Ipages } from '../../../../interfaces/ipages';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
@Input()page:Ipages[] = [];
// page:Ipages[]=[{
//   link: "about us"}
// ,{
//   link: "our team",

// }
// ,{
//   link: "our services",

// }
// ,{
//   link: "pricing",

// }
// ,{
//   link: "contact",

// }
// ,{
//   link: "error 404",

// }
//   ]
}
