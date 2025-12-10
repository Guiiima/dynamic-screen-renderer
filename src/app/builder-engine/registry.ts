import { Type } from '@angular/core';

const COMPONENT_MAP: Record<string, Type<any>> = {};

export function registerComponents(mapping: Record<string, Type<any>>) {
  Object.assign(COMPONENT_MAP, mapping);
}

export function getComponent(type: string): Type<any> | null {
  return COMPONENT_MAP[type] || null;
}