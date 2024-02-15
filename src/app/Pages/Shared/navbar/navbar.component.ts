import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../../theme.service';
import { FormsModule } from '@angular/forms';
import { JobsService } from '../../../jobs.service';
import { ModalComponent } from "../modal/modal.component";
import { ModalService } from '../../../modal.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [CommonModule, FormsModule, ModalComponent]
})
export class NavbarComponent {

  search: string = "../../../../assets/desktop/icon-search.svg";
  locationImg: string = "../../../../assets/desktop/icon-location.svg";
  checkBox: string = "../../../../assets/desktop/icon-check.svg";
  filterIcon: string = "../../../../assets/mobile/icon-filter.svg";

  position: string = '';
  location: string = '';
  fullTimeOnly: boolean = false;



  constructor(
    private jobsService: JobsService,
    private themeService: ThemeService,
   private modalService: ModalService
  ) {

  }

  ngOnInit(): void {

  }
  openModal() {
    this.modalService.toggleModal(true);
  }

  applyFilter(position: string, location: string, fullTimeOnly: boolean) {
    // Update filter criteria in the FilterService
    this.jobsService.position = position;
    this.jobsService.location = location;
    this.jobsService.fullTimeOnly = fullTimeOnly;
  }

  get isDarkMode(): boolean {
    return this.themeService.getCurrentTheme();
  }

}
