import { Component, OnInit,Input } from '@angular/core';
import { Instructions,InstructionStep } from '../../services/yummy-data-service/yummy-data.service';
@Component({
  selector: 'instructions-list',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  @Input() instructions: Instructions;
  constructor() { }

  ngOnInit() {
  }

}
