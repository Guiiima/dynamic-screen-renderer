import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZoneRendererComponent } from './builder-engine/zone-renderer-component/zone-renderer-component';
import { HeroWidgetComponent } from './library/widgets/hero-widget-component/hero-widget-component';
import { TextWidgetComponent } from './library/widgets/text-widget-component/text-widget-component';
import { TwoColum } from './library/layouts/two-colum/two-colum';
import { registerComponents } from './builder-engine/registry';
import { PageBuilder } from './builder-engine/services/page-builder';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ZoneRendererComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
public builderService = inject(PageBuilder);

  constructor() {
    registerComponents({
      'HERO_BANNER': HeroWidgetComponent,
      'INFO_TEXT': TextWidgetComponent,
      'LAYOUT_2_COLUNAS': TwoColum
    });
  }
}