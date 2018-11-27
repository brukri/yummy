import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-it-note',
  templateUrl: './post-it-note.component.html',
  styleUrls: ['./post-it-note.component.css']
})
export class PostItNoteComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}