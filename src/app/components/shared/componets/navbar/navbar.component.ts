import { AboutComponent } from './../../../about/about.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from "../nav-menu/nav-menu.component";
import { Ipages } from '../../../../interfaces/ipages';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, NavMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
// pages:any[]=[{link1:"about us"},{link2:"about us"}
//   ,{link3:"about us"},{link4:"about us"},{link5:"about us"}]
  mypage:Ipages[]=[{
    label: "about us",link:"/about"}
  ,{
    label: "our team",link:"/about"

  }
  ,{
    label: "our services",link:"/about"

  }
  ,{
    label: "pricing",link:"/about"

  }
  ,{
    label: "contact",link:"/about"

  }
  ,{
    label: "error 404",link:"/about"

  }
    ]

}
