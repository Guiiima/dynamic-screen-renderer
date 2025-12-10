import { Component, Input, Type } from '@angular/core';
import { getComponent } from '../registry';

@Component({
  selector: 'app-zone-renderer-component',
  imports: [],
  templateUrl: './zone-renderer-component.html',
  styleUrl: './zone-renderer-component.css',
})
export class ZoneRendererComponent {
  @Input() blocks: any[] = [];

  resolve(type: string): Type<any> {
    return getComponent(type);
  }
}