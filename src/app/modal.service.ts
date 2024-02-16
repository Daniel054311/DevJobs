import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  position: string = '';

  private isVisibleSubject = new Subject<boolean>();
  isVisible$ = this.isVisibleSubject.asObservable();

  constructor() {}

  toggleModal(isVisible: boolean, position: string = '') {
    this.isVisibleSubject.next(isVisible);
    this.position = position;
  }
}
