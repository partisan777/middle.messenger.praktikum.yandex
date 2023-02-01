//имитация регистрации и авторизации пользователей
export const isAuth = (): boolean => {
    if (localStorage.getItem('isAuth') === 'true') {
        return true
    } else {
        return false
    }
};

export const logIn = (): void => {
    localStorage.setItem('isAuth', 'true');
};

export const logOff = (): void => {
    localStorage.setItem('isAuth', 'false');
};

export const registrationNewUser = (): void => {
    // в данный момент функция не реализована
    localStorage.setItem('isAuth', 'true');
};



