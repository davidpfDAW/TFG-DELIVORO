import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-promotions',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>promotions works!</p>`,
    styleUrl: './promotions.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromotionsComponent { }
