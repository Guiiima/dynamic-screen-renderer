import { Component, Input, Type } from '@angular/core';
import { getComponent } from '../registry';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zone-renderer',
  imports: [CommonModule],
  templateUrl: './zone-renderer-component.html',
  styleUrl: './zone-renderer-component.css',
})
export class ZoneRendererComponent {
@Input() blocks: any[] = [];

  resolve(type: string): Type<any> | null {
    const component = getComponent(type);
    if (!component) {
      console.warn(`Componente não encontrado no registro: ${type}`);
      return null; 
    }
    return component;
  }
}