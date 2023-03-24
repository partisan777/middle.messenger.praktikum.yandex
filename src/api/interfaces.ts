
export interface SigninData {
    login: string;
    password: string;
}
  
export interface SignupData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export interface User {
    id: number;
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
    avatar: string;
}

export interface userSearch {
    login: string;
};

export interface userUpdateProfile {
    firstName?: string;
    secondName?: string;
    displayName?: string;
    login?: string;
    email?: string;
    phone?: string;
};

export interface ChatInfo {
    id?: number;
    title?: string;
    avatar?: string;
    unread_count?: number;
    last_message?: {
      user?: User,
      time?: string;
      content?: string;
    }
};


