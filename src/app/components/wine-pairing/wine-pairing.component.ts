import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WinePairing } from '../../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'yummy-wine-pairing',
  templateUrl: './wine-pairing.component.html'
})
export class WinePairingComponent {
  @Input()
  winePairing: WinePairing;

}
