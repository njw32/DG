import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-disc-card',
  templateUrl: './disc-card.component.html',
  styleUrls: ['./disc-card.component.scss'],
})
export class DiscCardComponent implements OnInit {
  @Input() discName: string;
  @Input() discManufacturer: string;
  @Input() discPlastic: string;
  @Input() discType: string;
  @Input() discWeight: number;
  @Input() discSpeed: number;
  @Input() discGlide: number;
  @Input() discTurn: number;
  @Input() discFade: number;
  @Input() discID: any;

  constructor() { }

  ngOnInit() { }
}
