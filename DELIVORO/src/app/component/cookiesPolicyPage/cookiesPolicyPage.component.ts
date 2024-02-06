import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-cookies-policy-page',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>cookiesPolicyPage works!</p>`,
    styleUrl: './cookiesPolicyPage.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookiesPolicyPageComponent { }
