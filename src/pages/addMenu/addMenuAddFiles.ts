import { createNodeObjects } from "../../utils/createNodeObject";
import { Button } from "../../components/button/button";
import { appendChildElements } from "../../utils/appendChild";



export const getAddMenuButtons = (): Button[] => {
	const addMediaButton: Button = new Button({
    	labelVisible: "Фото или видео",
        buttonAttrs: [
            'class="link-button"',
            'id="add-media"'
        ]
	});

	const addFileButton: Button = new Button({
		labelVisible: "Файл",
		buttonAttrs: [
            'class="link-button"',
            'id="add-file"'
        ]
	});

    const addLocationButton: Button = new Button({
		labelVisible: "Локация",
		buttonAttrs: [
            'class="link-button"',
            'id="delete-user"'
        ]
	});
    return [addMediaButton, addFileButton, addLocationButton]
};


 
export function getAddFilesMenu() {
    let div = createNodeObjects("div", ["menu-add-files"], {id: "menu-add-files"})
    div.style.display = 'none';
    div.innerHTML = 
        `<nav>
            <ul>
                <li id="li_add-foto-video">
                    <img class="chat-menu-icon" alt="Add" src="img/media.svg"></img>
                </li>
                <li id="li_add-file">
                    <img class="chat-menu-icon" alt="Add" src="img/file.svg"></img> 
                </li>
                <li id="li_add-location">
                    <img class="chat-menu-icon" alt="Add" src="img/location.svg"></img>    
                </li>
            </ul>
        </nav>`;
        
       
    return div;
}


