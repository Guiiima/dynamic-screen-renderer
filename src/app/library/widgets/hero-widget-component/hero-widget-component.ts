import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-widget-component',
  imports: [],
  templateUrl: './hero-widget-component.html',
  styleUrl: './hero-widget-component.css',
})
export class HeroWidgetComponent {
  @Input() data: any;
}
