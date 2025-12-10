import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ZoneRendererComponent } from '../../../builder-engine/zone-renderer-component/zone-renderer-component';

@Component({
  selector: 'app-two-colum',
  imports: [CommonModule, ZoneRendererComponent],
  templateUrl: './two-colum.html',
  styleUrl: './two-colum.css',
})
export class TwoColum {
  @Input() data: any;
}
