import { Component } from "../../models/components/components";
import { Button } from "../../models/button/button";
import addFilesPageTemplate from "./addFilesPage_tmpl.hbs"





interface addFilesPageProps{
	pageTitle: string,
	addFotoVideoEvents?: object,
	addFileEvents?: object,
	addLocationEvents?: object
}

export class AddFilesPage extends Component {
	constructor(props: addFilesPageProps ) {
		super('div', props, 'menu-add-files', 'menu-add-files', false)
	}
	init() {
		this.children.addfotovideo = new Button ({
			labelVisible: 'Фото Видео',
			buttonClass: "link-button",
			elem_id: "add-foto-video",
			events: this.props.addFotoVideoEvents.events
		});

		this.children.addfile = new Button ({
			labelVisible: 'Файл',
			buttonClass: "link-button",
			elem_id: "add-file",
			events: this.props.addFileEvents.events
		});
		
		this.children.addlocation = new Button ({
			labelVisible: 'Локация',
			buttonClass: "link-button",
			elem_id: "add-location",
			events: this.props.addLocationEvents.events
		});
		
	}
	render() {
        return this.compile(addFilesPageTemplate, this.props);
    }
}


