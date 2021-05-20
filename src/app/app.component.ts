import { ChangeDetectionStrategy, Component } from '@angular/core';
import { infoSections } from './data/info-sections';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./themes/battlegrounds-theme.scss', './app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	title = 'firestone-website';

	infoSections: readonly InfoSection[] = infoSections;
	selectedSection: InfoSection = this.infoSections[0];

	onModuleSelected(module: string): void {
		this.selectedSection = this.infoSections.find((section) => section.module === module);
	}
}

export interface InfoSection {
	module: string;
	title: string;
	thumbnailPath: string;
	videoPath: string;
	features: readonly InfoFeature[];
}

export interface InfoFeature {
	text: string;
}
