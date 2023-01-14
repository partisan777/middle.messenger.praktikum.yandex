<<<<<<< HEAD
import { createNodeObjects } from "../../utils/createNodeObject";

const menuAddFiles = [
=======
export const menuAddFiles = [
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
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


<<<<<<< HEAD
 
export function getAddFilesMenu() {

    let div = createNodeObjects("div", ["menu-add-files"], {id: "menu-add-files"})
=======
export function getAddFilesMenu() {

    let div = document.createElement('div');
    div.classList.add("menu-add-files");
    div.setAttribute("id", "menu-add-files");
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
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


