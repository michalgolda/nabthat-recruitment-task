import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MainService } from '../../services/main/main.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public mainService: MainService) {}
}
