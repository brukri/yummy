import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yummy-post-it-note',
  templateUrl: './post-it-note.component.html'
})
export class PostItNoteComponent {
  @Input() title;

}
