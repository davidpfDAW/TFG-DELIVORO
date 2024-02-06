import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-policies',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>policies works!</p>`,
    styleUrl: './policies.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoliciesComponent { }
