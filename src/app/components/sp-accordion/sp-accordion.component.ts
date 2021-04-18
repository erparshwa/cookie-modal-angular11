import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sp-accordion',
  templateUrl: './sp-accordion.component.html',
  styleUrls: ['./sp-accordion.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class SpAccordionComponent implements OnInit {

  @Input('toggleLabel') toggleLabel?:string;
  @Input('accordionClass') accordionClass?:string;
  @Input('headerClass') headerClass?:string;
  constructor() { }

  ngOnInit(): void {
  }

}
