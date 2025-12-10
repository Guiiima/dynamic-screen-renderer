import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageBuilder {

  private _pageConfig = signal<any[]>(this.getInitialDemoData());
  readonly pageConfig = this._pageConfig.asReadonly();

  selectedBlock = signal<any | null>(null);

  clearPage() {
    this._pageConfig.set([]);
    this.selectedBlock.set(null);
  }

  resetDemo() {
    this._pageConfig.set(this.getInitialDemoData());
    this.selectedBlock.set(null);
  }

  addComponent(type: string) {
    const newBlock = this.createBlockByType(type);
    const current = this._pageConfig();
    this._pageConfig.set([...current, newBlock]);
    this.selectBlock(newBlock);
  }

  selectBlock(block: any) {
    this.selectedBlock.set(block);
  }

  deleteSelected() {
    const selected = this.selectedBlock();
    if (!selected) return;
    const current = this._pageConfig();
    this._pageConfig.set(current.filter(b => b !== selected));
    this.selectedBlock.set(null);
  }

  updateBlock() {
    this._pageConfig.set([...this._pageConfig()]);
  }

  private getInitialDemoData() {
    return [
      {
        type: 'HERO_BANNER',
        data: { title: 'Demo Inicial', subtitle: 'Funciona!' }
      }
    ];
  }

  private createBlockByType(type: string): any {
    switch (type) {
      case 'HERO_BANNER':
        return { type, data: { title: 'Novo Hero', subtitle: 'Subtítulo aqui' } };
      case 'INFO_TEXT':
        return { type, data: { content: 'Novo texto...' } };
      case 'LAYOUT_2_COLUNAS':
        return { type, data: { leftColumn: [], rightColumn: [] } };
      default:
        return { type: 'INFO_TEXT', data: { content: 'Erro' } };
    }
  }
}
