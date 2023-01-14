(()=>{function e(){let e=document.createElement("div");return e.classList.add("registration_form"),e.setAttribute("id","reg-form"),e.innerHTML='\n     <p>Регистрация</p>\n        <form action="" class="reg-form">\n          <div class="form-email">\n            <div class="reg-form-label"><label for="email">Почта</label></div>\n            <div class="reg-form-input"><input type="text" name="email" id="email" required placeholder="Введите адрес электронной почты"></div>\n            <div class="reg-error" id="reg-error-email"></div>\n          </div>\n          <div class="form-login">\n            <div class="reg-form-label"><label for="login">Логин</label></div>\n            <div class="reg-form-input"><input type="text" name="login" id="login" required placeholder="Введите логин"></div>\n            <div class="reg-error" id="reg-error-login"></div>\n          </div>\n          <div class="form-name">\n            <div class="reg-form-label"><label for="first_name">Имя</label></div>\n            <div class="reg-form-input"><input type="text" name="first_name" id="first_name" required placeholder="Введите имя"></div>\n            <div><div class="reg-error" id="reg-error-name"></div>\n          </div>\n          <div class="form-lastname">\n            <div class="reg-form-label"><label for="second_name">Фамилия</label></div>\n            <div class="reg-form-input"><input type="text" name="second_name" id="second_name" required placeholder="Введите фамилию"></div>\n            <div class="reg-error" id="reg-error-lastname"></div>\n          </div>\n          <div class="form-display-name">\n            <div class="reg-form-label"><label for="display_name">Отображаемое имя</label></div>\n            <div class="reg-form-input"><input type="text" name="display_name" id="display_name" required placeholder="Отображаемое имя"></div>\n            <div class="reg-error" id="reg-error-lastname"></div>\n          </div>\n          <div class="form-phone">\n            <div class="reg-form-label"><label for="phone">Телефон</label></div>\n            <div class="reg-form-input"><input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="Введите номер телефона"></div>\n            <div class="reg-error" id="reg-error-phone"></div>\n          </div>\n          <div class="form-password">\n            <div class="reg-form-label"><label for="password">Пароль</label></div>\n            <div class="reg-form-input"><input type="password" name="password" id="password" required placeholder="Введите пароль"></div>\n            <div class="reg-error" id="reg-error-password"></div>\n          </div>\n          <div class="form-password-confirm"></div>\n            <div class="reg-form-label"><label for="password-confirm">Повторите пароль</label></div>\n            <div class="reg-form-input"><input type="password" name="password-confirm" id="password-confirm" required placeholder="Введите повтор пароля"></div>\n            <div class="reg-error" id="reg-error-password-confir"></div></div>\n          </div>\n            <div class="button-reg-form">\n              <button class="button-button" type="button" id="registration-button">\n                  Зарегистрироваться\n              </button>\n            </div>\n            <div class="button-reg-form">\n              <button class="link-button" type="button" id="login-button">\n                Вход\n              </button>\n            </div>\n      </form>\n    ',e}function t(){let e=document.createElement("div");return e.classList.add("registration_form"),e.setAttribute("id","login-form"),e.innerHTML='\n        <p>Вход</p>\n        <form action="" class="form-login-main" id="form-login-main">\n        <div class="form-login">\n          <div class="reg-form-label"><label for="login">Логин</label></div>\n          <div class="reg-form-input"><input type="text" name="login" id="login" required placeholder="Введите логин"></div>\n          <div class="reg-error" id="reg-error-login"></div>\n        </div>\n        <div class="form-password">\n          <div class="reg-form-label"><label for="password">Пароль</label></div>\n          <div class="reg-form-input"><input type="password" name="password" id="password" required placeholder="Введите пароль"></div>\n          <div class="reg-error" id="reg-error-password"></div>\n        </div>\n        <div class="button-reg-form">\n          <button class="button-button" type="button" id="login-button">\n            Вход\n          </button>\n        </div>\n        <div class="button-reg-form">  \n          <button class="link-button" type="button" id="registration-button">\n              Нет аккаунта?\n          </button>    \n        </div>\n      </form>\n    ',e}function n(){let e=document.createElement("div");return e.classList.add("chat-window"),e.setAttribute("id","chat-window"),e.innerHTML='\n        <div class="chat-sidebar" id="chat-sidebar">\n            <div class="chat-sidebar-header" id="chat-sidebar-header">\n                <button class="link-button" type="button" id="button-profile">\n                    Профиль\n                </button>\n                <div class="triangle"></div>\n            </div>\n            <div class="search" id="search">\n                <input type="search"></input>\n                <button class="button-button" type="button" id="profile-search-button">\n                    Поиск\n                </button>\n            </div>\n        </div>\n        <div class="dialog-window" id ="dialog-window">\n            <div class="dialog-header" id="dialog-header">\n                <div class="chat-header-descr" id="chat-header-descr">\n                    <p>Название чата</p>\n                    <a href="./error.html">Ссылка на страницу с ошибками</a>\n                    <a href="./notfound.html">Ссылка на несуществующую страницу</a>\n                </div>\n                <div class="chat-menu" id="chat-menu">\n                        <div class="mini-circle"></div>\n                        <div class="mini-circle"></div>\n                        <div class="mini-circle"></div>\n                </div>      \n            </div>\n            <div class="dialog" id="dialog">\n                Диалог\n            </div>\n            <div class="dialog-footer" id="dialog-footer">\n                <div class="chat-input-area" id="chat-input-area">\n                    <button class="circle" id="add-button">\n                        +\n                    </button>\n                    <input type="text" placeholder="Введите текст сообщения" class="chat-text-input" id="chat-text-input"></input>\n                    <button class="button-button" id="send-button">\n                        Отправить\n                    </button>\n                </div>\n            </div>\n        </div>\n    ',e}const a=[{id:111,title:"my-chat111",avatar:"/111/avatar1.jpg",unread_count:15,last_message:{user:{first_name:"Petya",second_name:"Pupkin",avatar:"/path/to/avatar.jpg",email:"my111@email.com",login:"userLogin111",phone:"8(911)-222-31-11"},time:"2020-01-02T14:22:22.000Z",content:"this is message content111"}},{id:222,title:"my-chat222",avatar:"/222/avatar1.jpg",unread_count:1,last_message:{user:{first_name:"Lesha",second_name:"Fedorov",avatar:"/path/to/avatar.jpg",email:"my222@email.com",login:"userLogin111",phone:"8(911)-222-32-22"},time:"2020-01-02T14:18:22.000Z",content:"this is message content222"}},{id:333,title:"my-chat333",avatar:"/333/avatar1.jpg",unread_count:5,last_message:{user:{first_name:"Sasha",second_name:"Pupkin",avatar:"/path/to/avatar.jpg",email:"my333@email.com",login:"userLogin333",phone:"8(911)-222-33-33"},time:"2020-01-02T11:22:22.000Z",content:"this is message content333"}},{id:444,title:"my-chat444",avatar:"/444/avatar1.jpg",unread_count:0,last_message:{user:{first_name:"Vasya",second_name:"Petrov",avatar:"/path/to/avatar.jpg",email:"my444@email.com",login:"userLogin444",phone:"8(911)-222-34-44"},time:"2020-01-02T14:22:22.000Z",content:"this is message content444"}},{id:555,title:"my-chat555",avatar:"/555/avatar1.jpg",unread_count:0,last_message:{user:{first_name:"Dima",second_name:"Ivanov",avatar:"/path/to/avatar.jpg",email:"my555@email.com",login:"userLogin555",phone:"8(911)-222-35-55"},time:"2020-01-01T14:22:22.000Z",content:"this is message content555"}},{id:111,title:"my-chat111",avatar:"/111/avatar1.jpg",unread_count:15,last_message:{user:{first_name:"Petya",second_name:"Pupkin",avatar:"/path/to/avatar.jpg",email:"my111@email.com",login:"userLogin111",phone:"8(911)-222-31-11"},time:"2020-01-02T14:22:22.000Z",content:"this is message content111"}},{id:222,title:"my-chat222",avatar:"/222/avatar1.jpg",unread_count:1,last_message:{user:{first_name:"Lesha",second_name:"Fedorov",avatar:"/path/to/avatar.jpg",email:"my222@email.com",login:"userLogin111",phone:"8(911)-222-32-22"},time:"2020-01-02T14:18:22.000Z",content:"this is message content222"}},{id:333,title:"my-chat333",avatar:"/333/avatar1.jpg",unread_count:5,last_message:{user:{first_name:"Sasha",second_name:"Pupkin",avatar:"/path/to/avatar.jpg",email:"my333@email.com",login:"userLogin333",phone:"8(911)-222-33-33"},time:"2020-01-02T11:22:22.000Z",content:"this is message content333"}},{id:444,title:"my-chat444",avatar:"/444/avatar1.jpg",unread_count:0,last_message:{user:{first_name:"Vasya",second_name:"Petrov",avatar:"/path/to/avatar.jpg",email:"my444@email.com",login:"userLogin444",phone:"8(911)-222-34-44"},time:"2020-01-02T14:22:22.000Z",content:"this is message content444"}},{id:555,title:"my-chat555",avatar:"/555/avatar1.jpg",unread_count:0,last_message:{user:{first_name:"Dima",second_name:"Ivanov",avatar:"/path/to/avatar.jpg",email:"my555@email.com",login:"userLogin555",phone:"8(911)-222-35-55"},time:"2020-01-01T14:22:22.000Z",content:"this is message content555"}},{id:111,title:"my-chat111",avatar:"/111/avatar1.jpg",unread_count:15,last_message:{user:{first_name:"Petya",second_name:"Pupkin",avatar:"/path/to/avatar.jpg",email:"my111@email.com",login:"userLogin111",phone:"8(911)-222-31-11"},time:"2020-01-02T14:22:22.000Z",content:"this is message content111"}},{id:222,title:"my-chat222",avatar:"/222/avatar1.jpg",unread_count:1,last_message:{user:{first_name:"Lesha",second_name:"Fedorov",avatar:"/path/to/avatar.jpg",email:"my222@email.com",login:"userLogin111",phone:"8(911)-222-32-22"},time:"2020-01-02T14:18:22.000Z",content:"this is message content222"}},{id:333,title:"my-chat333",avatar:"/333/avatar1.jpg",unread_count:5,last_message:{user:{first_name:"Sasha",second_name:"Pupkin",avatar:"/path/to/avatar.jpg",email:"my333@email.com",login:"userLogin333",phone:"8(911)-222-33-33"},time:"2020-01-02T11:22:22.000Z",content:"this is message content333"}},{id:444,title:"my-chat444",avatar:"/444/avatar1.jpg",unread_count:0,last_message:{user:{first_name:"Vasya",second_name:"Petrov",avatar:"/path/to/avatar.jpg",email:"my444@email.com",login:"userLogin444",phone:"8(911)-222-34-44"},time:"2020-01-02T14:22:22.000Z",content:"this is message content444"}},{id:555,title:"my-chat555",avatar:"/555/avatar1.jpg",unread_count:0,last_message:{user:{first_name:"Dima",second_name:"Ivanov",avatar:"/path/to/avatar.jpg",email:"my555@email.com",login:"userLogin555",phone:"8(911)-222-35-55"},time:"2020-01-01T14:22:22.000Z",content:"this is message content555"}}],i={id:111,first_name:"Petya",second_name:"Pupkin",display_name:"Petya Pupkin",login:"userLogin111",email:"my111@email.com",phone:"89223332111",avatar:"/path/to/avatar.jpg"};function o(){a.sort(((e,t)=>-1*(new Date(e.last_message.time)-new Date(t.last_message.time))));let e=document.createElement("div");return e.classList.add("chat-sidebar-items"),e.setAttribute("id","chat-sidebar-items"),a.forEach((t=>{let n=document.createElement("div");n.classList.add("chat-item"),n.setAttribute("id",`chat-item-${t.id}`),n.innerHTML=`\n                <div class="chat-avatar" id="chat-avatar-${t.id}">\n                    <img src="#" alt="Avatar" />\n                </div>\n                <div class="chat-name" id="chat-name-${t.id}">${t.title}</div>\n                <div class="chat-last-message-time" id="chat-last-message-time-${t.id}">${t.last_message.time.slice(11,16)}</div>\n            \n                <div class="chat-last-message" id="chat-last-message-${t.id}">${t.last_message.content}</div>\n                ${0!==t.unread_count?`<div class="circle chat-unread-message-count" id="chat-unread-message-count-${t.id}">${t.unread_count}</div>`:""}\n             `,e.appendChild(n)})),e}const d=()=>{let e=document.createElement("div");return e.classList.add("profile-main"),e.setAttribute("id","profile-main"),e.innerHTML=`\n            <form class="profile-form" id="profile-form">    \n                \n                <div class="profile-sidebar" id="profile-sidebar">\n                    <button class="profile-exit" id="profile-exit">\n                        Назад\n                    </button>\n                </div>\n                <form class="profile-subform" id="profile-subform">\n                    <div class="profile-avatar" id="profile-avatar">\n                        <img src="#" alt="Avatar" />\n                    </div>  \n                    <div class="profile-input">\n                        <label for="pr-form-email">Почта</label>\n                        <input type="text" id="pr-form-email" name="email" value="${i.email}" />\n                    <div class="profile-input">\n                        <label for="pr-form-login">Логин</label>\n                        <input type="text" id="pr-form-login" name="login" value="${i.login}" />\n                    </div>\n                    <div class="profile-input">\n                        <label for="pr-form-first_name">Имя</label>\n                        <input type="text" id="pr-form-first_name" name="first_name"  value="${i.first_name}" />\n                    </div>\n                    <div class="profile-input">\n                        <label for="pr-form-second_name">Фамилия</label>\n                        <input type="text" id="pr-form-second_name" name="second_name"  value="${i.second_name}" />\n                    </div>\n                    <div class="profile-input">\n                        <label for="pr-form-display_name">Имя в чате</label>\n                        <input type="text" id="pr-form-display_name" name="display_name"  value="${i.display_name}" />\n                    </div>\n                    <div class="profile-input">\n                        <label for="pr-form-login">Телефон</label>\n                        <input type="text" id="pr-form-phone" name="phone"  value="${i.phone}" />\n                    </div>\n                </div>\n                <div class="profile-buttons" id="profile-buttons">\n                    <div class="button-reg-form">\n                        <button class="link-button" id="profile-change-data">\n                            Изменить данные\n                        </button>\n                    </div>\n                    <div class="button-reg-form">\n                        <button class="link-button" id="profile-change-password">\n                            Изменить пароль\n                        </button>\n                    </div>\n                    <div class="button-reg-form">\n                        <button class="button-button" id="profile-logout">\n                            Выйти\n                        </button>\n                    </div>\n                </div>\n            </form>    \n\n    `,e};function r(){let e=document.createElement("div");return e.classList.add("modal"),e.setAttribute("id","myModal"),e.innerHTML='<div class="modal-content" id="modal-content">\n            <p>Некоторый текст в модальном..</p>\n        </div>',e}function s(){let e=document.createElement("div");return e.classList.add("change-password-form"),e.setAttribute("id","change-password"),e.innerHTML='\n        <p>Сменить пароль</p>\n        <form action="" class="change-password-form">\n        <div class="form-password">\n          <div class="reg-form-label"><label for="password">Текущий пароль</label></div>\n          <div class="reg-form-input"><input type="password" name="oldPassword" id="password" required placeholder="Введите пароль"></div>\n          <div class="reg-error" id="error-current-password"></div>\n        </div>\n        <div class="new-password"></div>\n          <div class="reg-form-label"><label for="password-confirm">Новый пароль</label></div>\n          <div class="reg-form-input"><input type="password" name="newPassword" id="new-password" required placeholder="Введите повтор пароля"></div>\n          <div class="reg-error" id="error-new-password"></div></div>\n        </div>\n        <div class="form-new-password-confirm"></div>\n          <div class="reg-form-label"><label for="new-password-confirm">Повторите пароль</label></div>\n          <div class="reg-form-input"><input type="password" name="newPassword-confirm" id="new-password-confirm" required placeholder="Введите повтор пароля"></div>\n          <div class="reg-error" id="error-new-password-confirm"></div></div>\n        </div>\n          <div class="button-reg-form">\n            <button class="button-button" type="button" id="registration-button">\n                Сменить пароль\n            </button>\n          </div>\n          <div class="button-reg-form">\n            <button class="link-button" type="button" id="close-change-password-form-button">\n              Закрыть\n            </button>\n          </div>\n      </form>\n    ',e}const l=[{title:"Фото или видео",class:"add-files",id:"add-foto-video",iconSrc:"img/media.svg"},{title:"Файл",class:"add-files",id:"add-file",iconSrc:"img/file.svg"},{title:"Локация",class:"add-files",id:"add-location",iconSrc:"img/location.svg"}];function c(){let e=document.createElement("div");return e.classList.add("menu-add-files"),e.setAttribute("id","menu-add-files"),e.innerHTML=`<nav>\n            <ul>\n                ${l.map((e=>`\n                    <li id="${e.id}">\n                        <img class="chat-menu-icon" alt="Add" src="${e.iconSrc}"></img>    \n                        <button class="link-button">\n                            ${e.title}\n                        </button>\n                    </li>\n                    `)).join("")}\n            </ul>\n        </nav>`,e}const m=[{title:"Добавить пользователя",class:"chat-menu-item",id:"add-user",iconSrc:"img/add.svg"},{title:"Удалить пользователя",class:"chat-menu-item",id:"delete-user",iconSrc:"./img/delete.svg"}];function u(){let e=document.createElement("div");return e.classList.add("chat-menu-list"),e.setAttribute("id","chat-menu-list"),e.innerHTML=`<nav>\n            <ul>\n                ${m.map((e=>`<li  id="${e.id}">\n                        <img class="chat-menu-icon" alt="Add" src="${e.iconSrc}"></img>\n                        <button class="link-button">\n                            ${e.title}\n                        </button>\n                    </li>`)).join("")}\n            </ul>\n        </nav>`,e}function v(){let e=document.createElement("div");return e.classList.add("manage-chat-user"),e.setAttribute("id","manage-chat-user"),e.innerHTML='\n        <p>Добавить пользователя</p>\n        <form action="" class="add-user-form">\n        <div class="">\n          <div class="reg-form-label"><label>Добавить пользователя</label></div>\n          <div class="reg-form-input"><input type="text" name="" id="" required placeholder="Введите логин"></div>\n          <div class="reg-error" id="error-add-chat-user"></div>\n        </div>\n        <div class="button-reg-form">\n            <button class="button-button" type="button" id="registration-button">\n                Добавить\n            </button>\n          </div>\n          <div class="button-reg-form">\n            <button class="link-button" type="button" id="close-manage-chat-user">\n              Закрыть\n            </button>\n          </div>\n      </form>\n    ',e}function p(){let e=document.createElement("div");return e.classList.add("manage-chat-user"),e.setAttribute("id","manage-chat-user"),e.innerHTML='\n        <p>Удалить пользователя</p>\n        <form action="" class="add-user-form">\n        <div class="">\n          <div class="reg-form-label"><label>Удалить пользователя</label></div>\n          <div class="reg-form-input"><input type="text" name="" id="" required placeholder="Введите логин"></div>\n          <div class="reg-error" id="error-add-chat-user"></div>\n        </div>\n        <div class="button-reg-form">\n            <button class="button-button" type="button" id="registration-button">\n                Добавить\n            </button>\n          </div>\n          <div class="button-reg-form">\n            <button class="link-button" type="button" id="close-manage-chat-user">\n              Закрыть\n            </button>\n          </div>\n      </form>\n    ',e}const g=()=>{let e=document.createElement("div");return e.classList.add("add-avatar"),e.setAttribute("id","add-avatar"),e.innerHTML='\n        <form class="change-password-form" id="add-avatar-form">\n            <form class="profile-subform" id="profile-subform">\n                <div class="profile-input">\n                    <label for="pr-form-email">Выберите изображение</label>\n                    <input type="image" id="add-avatar-input" />\n                </div>\n            <div class="profile-buttons" id="profile-add-avatar-buttons">\n                <div class="button-reg-form">\n                    <button class="button-button" id="save-avatar-button">\n                        Добавить\n                    </button>\n                </div>\n                <div class="button-reg-form">\n                    <button class="link-button" id="close-add-avatar-button">\n                        Закрыть\n                    </button>\n                </div>\n            </div>\n        </form>\n    ',e},f=()=>{const e=document.getElementById("reg-form");e&&e.parentNode.removeChild(e);const t=document.getElementById("login-form");t&&t.parentNode.removeChild(t),localStorage.setItem("isAuth",!0),H()},b=()=>{localStorage.setItem("isAuth",!0),f()},h=()=>{const e=document.getElementById("root");for(;e.firstChild;)e.removeChild(e.firstChild);localStorage.setItem("isAuth",!1),H()},y=e=>{const t=document.getElementById(e);t&&t.remove()},_=e=>{document.getElementById(e).replaceChildren()};function E(e){document.getElementById(e).style.display="none"}function w(e){document.getElementById(e).style.display="flex"}const L=()=>{document.getElementById("root").appendChild(t()),document.getElementById("login-button").addEventListener("click",f),document.getElementById("registration-button").addEventListener("click",B)},I=()=>{document.getElementById("root").appendChild(e()),document.getElementById("registration-button").addEventListener("click",b),document.getElementById("login-button").addEventListener("click",B)},B=()=>{document.getElementById("reg-form")?(y("reg-form"),L()):(y("login-form"),I())};function k(){document.getElementById("myModal");$();document.getElementById("modal-content").appendChild(g()),document.getElementById("close-add-avatar-button").addEventListener("click",A),document.getElementById("save-avatar-button").addEventListener("click",A)}function j(){E("chat-window");document.getElementById("root").appendChild(d()),document.getElementById("profile-logout").addEventListener("click",h),document.getElementById("profile-sidebar").addEventListener("click",S),document.getElementById("profile-change-password").addEventListener("click",T),document.getElementById("profile-avatar").addEventListener("click",k)}function T(){document.getElementById("myModal");$();document.getElementById("modal-content").appendChild(s()),document.getElementById("close-change-password-form-button").addEventListener("click",A)}function $(){document.getElementById("myModal");w("myModal"),_("modal-content")}function A(){document.getElementById("myModal");E("myModal"),_("modal-content")}function M(){document.getElementById("root").appendChild(c())}function x(){document.getElementById("myModal");$();document.getElementById("modal-content").appendChild(v()),document.getElementById("close-manage-chat-user").addEventListener("click",A)}function C(){document.getElementById("myModal");$();document.getElementById("modal-content").appendChild(p()),document.getElementById("close-manage-chat-user").addEventListener("click",A)}const P=()=>{y("chat-menu-list")};function q(){const e=document.getElementById("root");e.appendChild(u()),document.getElementById("add-user").addEventListener("click",x),document.getElementById("delete-user").addEventListener("click",C),e.addEventListener("click",P),e.removeEventListener("click",P)}function Z(){const e=document.getElementById("root");e.appendChild(n()),document.getElementById("chat-sidebar").appendChild(o()),document.getElementById("button-profile").addEventListener("click",j),document.getElementById("add-button").addEventListener("click",M),document.getElementById("chat-menu").addEventListener("click",q),e.appendChild(r())}function S(){y("profile-main"),w("chat-window")}const H=()=>{"true"===localStorage.getItem("isAuth")==!1?L():Z()};H(),document.getElementById("form-login-main").addEventListener("submit",(function(e){e.preventDefault(),console.log(e)}))})();
//# sourceMappingURL=index.e4926d89.js.map
