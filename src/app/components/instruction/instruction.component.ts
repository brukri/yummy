import { Component, OnInit,Input } from '@angular/core';
import { Instructions,InstructionStep } from '../../services/yummy-data-service/yummy-data.service';
@Component({
  selector: 'instruction-list',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
  @Input() instructions: Instructions;
  constructor() { }

  ngOnInit() {
  }

}
