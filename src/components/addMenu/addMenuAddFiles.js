import { createNodeObjects } from "../../utils/createNodeObject";

const menuAddFiles = [
	{
		title: "Фото или видео",
	    class: "add-files",
        id: "add-foto-video",
        iconSrc: 'img/media.svg',
	},
	{
		title: "Файл",
		class: "add-files",
        id: "add-file",
        iconSrc: 'img/file.svg',
	},
	{
		title: "Локация",
		class: "add-files",
        id: "add-location",
        iconSrc: 'img/location.svg',
	},
];


 
export function getAddFilesMenu() {

    let div = createNodeObjects("div", ["menu-add-files"], {id: "menu-add-files"})
    div.innerHTML = 
        `<nav>
            <ul>
                ${ menuAddFiles.map((item) => (
                    `
                    <li id="${item.id}">
                        <img class="chat-menu-icon" alt="Add" src="${item.iconSrc}"></img>    
                        <button class="link-button">
                            ${item.title}
                        </button>
                    </li>
                    `
                    )).join('')
                }
            </ul>
        </nav>`;

    return div;
}


