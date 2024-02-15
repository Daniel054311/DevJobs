import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../../modal.service';
import { JobsService } from '../../../jobs.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  locationImg: string = '../../../../assets/desktop/icon-location.svg';

  isVisible: boolean = false;

  position: string = '';
  location: string = '';
  fullTimeOnly: boolean = false;

  private subscription: Subscription;

  constructor(private modalService: ModalService, private jobsService: JobsService,) {
    this.subscription = this.modalService.isVisible$.subscribe((isVisible) => {
      this.isVisible = isVisible;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeModal() {
    this.modalService.toggleModal(false);
  }

  applyFilter( location: string, fullTimeOnly: boolean) {
    // Update filter criteria in the FilterService
    this.jobsService.location = location;
    this.jobsService.fullTimeOnly = fullTimeOnly;
    this.closeModal()
  }
}
