import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-check-and-pay',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>checkAndPay works!</p>`,
    styleUrl: './checkAndPay.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckAndPayComponent { }
