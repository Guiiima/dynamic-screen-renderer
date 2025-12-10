import { Type } from '@angular/core';
import { TwoColum } from '../library/layouts/two-colum/two-colum';
import { TextWidgetComponent } from '../library/widgets/text-widget-component/text-widget-component';
import { HeroWidgetComponent } from '../library/widgets/hero-widget-component/hero-widget-component';


export const COMPONENT_MAP: Record<string, Type<any>> = {
  'HERO_BANNER': HeroWidgetComponent,
  'INFO_TEXT': TextWidgetComponent,
  'LAYOUT_2_COLUNAS': TwoColum
};

export function getComponent(type: string): Type<any> {
  return COMPONENT_MAP[type] || TextWidgetComponent;
}