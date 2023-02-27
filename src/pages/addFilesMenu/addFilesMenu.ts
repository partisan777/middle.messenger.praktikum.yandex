import { Component } from "../../models/components/components";
import { Button } from "../../models/button/button";
import addFilesPageTemplate from "./addFilesPage_tmpl.hbs"





interface addFilesPageProps{
	pagetitle: string;
}

export class AddFilesPage extends Component {
	constructor(props: addFilesPageProps ) {
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
        return this.compile(addFilesPageTemplate, this.props);
    }
}


