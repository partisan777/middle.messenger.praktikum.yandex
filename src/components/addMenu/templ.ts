const template_ChatMenu: string {
 return `<nav>
        <ul>
    ${chatMenu.map((item) => (
        `<li  id="${item.id}">
            <img class="chat-menu-icon" alt="Add" src="${item.iconSrc}"></img>
            <button class="link-button">
                ${item.title}
            </button>
        </li>`
        )).join('')
    }
    </ul>
</nav>`;

}
