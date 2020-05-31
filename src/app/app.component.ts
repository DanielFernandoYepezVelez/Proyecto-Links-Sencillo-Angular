import { Component } from '@angular/core';
import { Link } from './components/link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  links: Link[] = [];

  constructor() {}

  public newLink(title: HTMLInputElement, link: HTMLInputElement) {
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }
}
