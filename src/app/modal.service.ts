import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isVisibleSubject = new Subject<boolean>();
  isVisible$ = this.isVisibleSubject.asObservable();

  constructor() {}

  toggleModal(isVisible: boolean) {
    this.isVisibleSubject.next(isVisible);
  }
}
