import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-download-button',
	templateUrl: './download-button.component.html',
	styleUrls: ['./download-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadButtonComponent {
	@Input() id: string;

	clickDownload(): void {}
}
