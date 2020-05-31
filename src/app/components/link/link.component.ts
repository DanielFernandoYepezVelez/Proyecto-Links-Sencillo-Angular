import { Component, OnInit, Input } from '@angular/core';
import { Link } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styles: [],
})
export class LinkComponent implements OnInit {
  @Input() entradaLink: Link;

  constructor() {}

  ngOnInit(): void {}
}
