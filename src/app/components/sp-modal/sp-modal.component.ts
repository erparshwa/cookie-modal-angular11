import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sp-modal',
  templateUrl: './sp-modal.component.html',
  styleUrls: ['./sp-modal.component.scss']
})
export class SpModalComponent {

  @Input('size') size?: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input('title') title?: string;
  @Input('backdrop') backdrop?: boolean | 'static' = 'static';
  @Output('onClose') onClose? : EventEmitter<any> = new EventEmitter();
  @ViewChild('modalContent') modalContent : any;

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(this.modalContent, { 
      size : this.size,
      backdrop : this.backdrop 
    }).result.then((result) => {
      this.closeCallback(true);
    }, (reason) => {
      this.closeCallback(false);
    });
  }

  dismiss(){
    this.modalService.dismissAll();
  }

  closeCallback(success){
    if(this.onClose){
      this.onClose.emit({success});
    }
  }
}
