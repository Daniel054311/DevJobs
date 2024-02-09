import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  search: string = "../../../../assets/desktop/icon-search.svg"
  location: string = "../../../../assets/desktop/icon-location.svg"
  checkBox:string = "../../../../assets/desktop/icon-check.svg"
}
