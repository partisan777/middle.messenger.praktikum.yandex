import MainWindowView from "../../views/mainWindowView/mainWindow"; 
import { Component } from "../../models/components/components";
import { MainWindow } from "../../models/mainWindow/mainWindow";

export class MainWindowController {
	
	// private container: HTMLElement;
	// private model: MainWindow;
	private view: MainWindowView;

	constructor(container: HTMLElement, model: MainWindow) {
		this.view = new MainWindowView (
			container, 
			model
		);
		this.model = model;
		this.view.render();
		
	}

	
}