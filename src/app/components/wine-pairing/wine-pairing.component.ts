import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WinePairing } from '../../services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'app-wine-pairing',
  templateUrl: './wine-pairing.component.html',
  styleUrls: ['./wine-pairing.component.css']
})
export class WinePairingComponent implements OnInit {
  @Input()
  winePairing: WinePairing;

  constructor() { }

  ngOnInit() {
  }

}
