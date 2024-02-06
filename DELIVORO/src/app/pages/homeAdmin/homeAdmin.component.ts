import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home-admin',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>homeAdmin works!</p>`,
    styleUrl: './homeAdmin.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeAdminComponent { }
