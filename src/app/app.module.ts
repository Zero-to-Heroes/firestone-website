import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { AppComponent } from './app.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { MenuSelectionComponent } from './menu-selection/menu-selection.component';
import { appAchievementsIcon } from './svg/achievements';
import { appBattlegroundsIcon } from './svg/battlegrounds';
import { appCollectionIcon } from './svg/collection';
import { appDecktrackerIcon } from './svg/decktracker';
import { appDuelsIcon } from './svg/duels';
import { appFirestoneLogoIcon } from './svg/firestone_logo';
import { appGeneralIcon } from './svg/general';
import { appReplaysIcon } from './svg/replays';
import { appVideoPlayIcon } from './svg/video_play';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { VideoContainerComponent } from './video-container/video-container.component';

@NgModule({
	declarations: [AppComponent, DownloadButtonComponent, ToolbarComponent, MenuSelectionComponent, VideoContainerComponent],
	imports: [
		BrowserModule,
		SvgIconsModule.forRoot({
			icons: [
				appFirestoneLogoIcon,
				appDecktrackerIcon,
				appBattlegroundsIcon,
				appAchievementsIcon,
				appCollectionIcon,
				appDuelsIcon,
				appGeneralIcon,
				appReplaysIcon,
				appVideoPlayIcon,
			],
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
