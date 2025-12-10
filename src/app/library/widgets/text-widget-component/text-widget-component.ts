import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-widget-component',
  imports: [],
  templateUrl: './text-widget-component.html',
  styleUrl: './text-widget-component.css',
})
export class TextWidgetComponent {
  @Input() data: any;
}
