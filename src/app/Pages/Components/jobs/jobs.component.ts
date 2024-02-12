import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Shared/filter/navbar.component';
import { JobsService } from '../../../jobs.service';
import { Job } from '../../../job';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../../theme.service';
import { CardComponent } from '../../Shared/card/card.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
  imports: [NavbarComponent, NgClass, CardComponent],
})
export class JobsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
