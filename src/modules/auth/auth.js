//имитация регистрации и авторизации пользователей
export const isAuth = () => {
    if (localStorage.getItem('isAuth') === 'true') {
        return true
    } else {
        return false
    }
};

export const logIn = () => {
    localStorage.setItem('isAuth', true);
};

export const logOff = () => {
    localStorage.setItem('isAuth', false);
};

export const registrationNewUser = () => {
    // в данный момент функция не реализована
    localStorage.setItem('isAuth', true);
<<<<<<< HEAD
};



=======
};
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
