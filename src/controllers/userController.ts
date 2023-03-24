import API, { UserAPI } from '../api/UserApi';
import store from '../models/components/store';


class UserController {
  private readonly api: UserAPI;
  constructor() {
    this.api = API;
  }

  async updateProfile(data: Any) {
    try {
      await this.api.updateProfile(data);
    } catch (e: any) {
      console.error(e);
    }
  }

  async updateAvatar(data: FormData) {
    try {
      // console.log(data);
      await this.api.updateAvatar(data);
    } catch (e: any) {
      console.error(e);
    }
    
  }
}

export default new UserController();

