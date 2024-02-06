import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-privacy-policy-page',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>privacyPolicyPage works!</p>`,
    styleUrl: './privacyPolicyPage.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyPageComponent { }
