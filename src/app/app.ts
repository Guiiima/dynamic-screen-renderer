import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZoneRendererComponent } from './builder-engine/zone-renderer-component/zone-renderer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ZoneRendererComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
pageConfig = [
    {
      type: 'HERO_BANNER',
      data: { title: 'Builder com HTML Separado', subtitle: 'Muito mais organizado!' }
    },
    {
      type: 'LAYOUT_2_COLUNAS',
      data: {
        leftColumn: [
           { type: 'INFO_TEXT', data: { content: 'Agora os arquivos HTML estão limpos.' } },
           { type: 'INFO_TEXT', data: { content: 'Isso facilita a manutenção.' } }
        ],
        rightColumn: [
           { type: 'HERO_BANNER', data: { title: 'Sidebar', subtitle: 'Teste' } }
        ]
      }
    },
    {
      type: 'INFO_TEXT',
      data: { content: 'Rodapé fora do grid.' }
    }
  ];
}