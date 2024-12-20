import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { HeroComponent } from "../../components/home/hero/hero.component";
import { ServicesComponent } from "../../components/home/services/services.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
