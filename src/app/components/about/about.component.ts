import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/componets/navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { LandscapeImgComponent } from "../shared/componets/landscape-img/landscape-img.component";
import { VisionComponent } from "../shared/componets/vision/vision.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, RouterModule, LandscapeImgComponent, VisionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
