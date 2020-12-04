import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bag-disc-cards',
  templateUrl: './bag-disc-cards.component.html',
  styleUrls: ['./bag-disc-cards.component.scss'],
})
export class BagDiscCardsComponent implements OnInit {

  // initializes the inputs
  @Input() disc_name: string;
  @Input() disc_type: string;
  @Input() manufacturer: string;

  constructor() { }

  ngOnInit() { }

}
