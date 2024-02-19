import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../../service/modal/modal.service';
import { JobsService } from '../../../service/job/jobs.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  // @Output() positionEmitter: EventEmitter<string> = new EventEmitter<string>();

  locationImg: string = '../../../../assets/desktop/icon-location.svg';
  isVisible: boolean = false;
  position: string = '';
  location: string = '';
  fullTimeOnly: boolean = false;

  private subscription: Subscription;

  constructor(
    private modalService: ModalService,
    private jobsService: JobsService
  ) {
    this.subscription = this.modalService.isVisible$.subscribe((isVisible) => {
      this.isVisible = isVisible;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeModal() {
    this.modalService.toggleModal(false);
  }

  applyFilter(location: string, fullTimeOnly: boolean) {
    const position = this.modalService.position;
    this.jobsService.applyFilter(position, location, fullTimeOnly);
    // this.jobsService.applyFilter(position, location, fullTimeOnly);
    // console.log(position)
    this.closeModal();
  }
}
