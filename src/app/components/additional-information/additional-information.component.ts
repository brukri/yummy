import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { WinePairing, Nutrition } from 'src/app/services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'yummy-additional-information',
  templateUrl: './additional-information.component.html'
})
export class AdditionalInformationComponent implements OnChanges {
  @Input() winePairing: WinePairing;
  @Input() nutrition$: Nutrition;
  @Output() nutritionPanelOpenEvent: EventEmitter<string> = new EventEmitter();
  isLoading = false;
  nutrition: Nutrition;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.nutrition$ && changes.nutrition$.currentValue) {
      changes.nutrition$.currentValue.subscribe(
        nutrition => this.nutrition = nutrition,
        err => this.isLoading = false,
        () => this.isLoading = false
      );
    }
  }

  isWinePairingPanelDisabled(): boolean {
    return !this.winePairing;
  }

  onNutritionPanelOpen() {
    if (!this.nutrition) {
      this.isLoading = true;
      this.nutritionPanelOpenEvent.emit();
    }
  }
}
