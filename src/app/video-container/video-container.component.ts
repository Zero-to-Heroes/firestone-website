import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'app-video-container',
	templateUrl: './video-container.component.html',
	styleUrls: ['./video-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoContainerComponent {
	@ViewChild('videoPlayer') videoplayer: ElementRef;

	@Input() thumbnail: string;
	@Input() video: string;

	startedPlaying: boolean;
	isPlaying: boolean;

	handleClick(): void {
		this.startedPlaying = true;
		if (!this.isPlaying) {
			this.isPlaying = true;
			this.videoplayer.nativeElement.play();
		} else {
			this.isPlaying = false;
			this.videoplayer.nativeElement.pause();
		}
	}
}
