import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WinePairing, Nutrition } from 'src/app/services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.css']
})
export class AdditionalInformationComponent implements OnInit {
  @Input() winePairing: WinePairing;
  @Input() nutrition: Nutrition;
  @Output() nutritionPanelOpenEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isWinePairingPanelDisabled(): boolean {
    return !this.winePairing;
  }

  onNutritionPanelOpen() {
    this.nutritionPanelOpenEvent.emit();
  }
}
