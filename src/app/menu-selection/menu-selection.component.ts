import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-menu-selection',
	templateUrl: './menu-selection.component.html',
	styleUrls: ['./menu-selection.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSelectionComponent {
	@Input() selectedModule: string;
	@Output() moduleSelected: EventEmitter<string> = new EventEmitter<string>();

	mouseOver: boolean;

	selectModule(module: string): void {
		this.moduleSelected.next(module);
	}

	onMouseEnter(): void {
		this.mouseOver = true;
	}

	onMouseLeave(): void {
		this.mouseOver = false;
	}
}
