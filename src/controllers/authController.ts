import API, { AuthAPI, SigninData, SignupData } from '../api/AuthAPI';
import store from '../models/components/store';
import router from '../models/components/router';

export class AuthController {
  private readonly api: AuthAPI;
  constructor() {
    this.api = API;
  }
  async signin(data: SigninData) {
    try {
      await this.api.signin(data);
      console.log(store);
      router.go('/profile');
    } catch (e: any) {
      console.error(e);
    }
  }
  async signup(data: SignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();

      router.go('/profile');
    } catch (e: any) {
      console.error(e.message);
    }
  }
  async fetchUser() {
    const user = await this.api.read();
    store.set('user', user);
    console.log(store);
  }
  async logout() {
    try {
      await this.api.logout();
      router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();