import { Component } from "../../models/components/components";
import { Button } from "../../models/button/button";
import AddFilesPageTemplate from "./addFilesPage_tmpl.hbs"





interface addFilesWindowPageProps{
	pagetitle: string;
}

export class AddFilesWindowPage extends Component {
	constructor(props: addFilesWindowPageProps) {
		super('div', props, 'menu-add-files', 'menu-add-files')
	}
	init() {
		
		this.children.addfotovideo = new Button ({
			labelVisible: 'Фото Видео',
			buttonClass: "link-button",
			elem_id: "add-foto-video"
		});

		this.children.addfile = new Button ({
			labelVisible: 'Файл',
			buttonClass: "link-button",
			elem_id: "add-file"
		});
		
		this.children.addlocation = new Button ({
			labelVisible: 'Локация',
			buttonClass: "link-button",
			elem_id: "add-location"
		});

		

		
	}
	render() {
        return this.compile(AddFilesPageTemplate, this.props);
    }
}


