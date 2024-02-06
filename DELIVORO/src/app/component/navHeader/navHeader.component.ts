import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-nav-header',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>navHeader works!</p>`,
    styleUrl: './navHeader.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavHeaderComponent { }
