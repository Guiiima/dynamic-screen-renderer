import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZoneRendererComponent } from './builder-engine/zone-renderer-component/zone-renderer-component';
import { HeroWidgetComponent } from './library/widgets/hero-widget-component/hero-widget-component';
import { TextWidgetComponent } from './library/widgets/text-widget-component/text-widget-component';
import { TwoColum } from './library/layouts/two-colum/two-colum';
import { registerComponents } from './builder-engine/registry';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ZoneRendererComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
constructor() {
    registerComponents({
      'HERO_BANNER': HeroWidgetComponent,
      'INFO_TEXT': TextWidgetComponent,
      'LAYOUT_2_COLUNAS': TwoColum
    });
  }

  pageConfig = [
    {
      type: 'HERO_BANNER',
      data: { title: 'Teste de Recursividade', subtitle: 'Agora sem Ciclo Infinito!' }
    },
    {
      type: 'LAYOUT_2_COLUNAS',
      data: {
        leftColumn: [
           { type: 'INFO_TEXT', data: { content: 'Nível 1 - Esquerda' } }
        ],
        rightColumn: [
           {
              type: 'LAYOUT_2_COLUNAS', 
              data: {
                leftColumn: [ { type: 'INFO_TEXT', data: { content: 'Nível 2 - Esquerda' } } ],
                rightColumn: [ { type: 'INFO_TEXT', data: { content: 'Nível 2 - Direita' } } ]
              }
           }
        ]
      }
    }
  ];
}