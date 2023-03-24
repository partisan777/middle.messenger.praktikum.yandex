import BaseAPI from './BaseAPI';
import { User, userSearch, userUpdateProfile } from "./interfaces"

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  public search(data: userSearch) {
    return this.http.post('/search', {
    });
  }

  public updateProfile(data: userUpdateProfile) {
    return this.http.put('/profile', {
      data: JSON.stringify(data),
    });
  }

  public updateAvatar(data: FormData) {
    // console.log(data)
    return this.http.put('/profile/avatar', data);
  }
  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}


export default new UserAPI();


