import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';
import { NgClass } from '@angular/common';
import { CardComponent } from '../../Shared/card/card.component';
import { ModalComponent } from "../../Shared/modal/modal.component";


@Component({
    selector: 'app-jobs',
    standalone: true,
    templateUrl: './jobs.component.html',
    styleUrl: './jobs.component.css',
    imports: [NavbarComponent, NgClass, CardComponent, ModalComponent]
})
export class JobsComponent implements OnInit {



  constructor() {}

  ngOnInit(): void { }

  

}
