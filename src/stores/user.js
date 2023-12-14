// import { login, logout, getInfo } from '@/api/user'
import { login, logout, getInfo } from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';

import { defineStore } from 'pinia';

const state = () => ({
  token: getToken(),
  name: '',
  avatar: '',
});

const actions = {
  RESET_STATE() {
    this.$reset();
  },
  SET_TOKEN(token) {
    this.token = token;
  },
  SET_NAME(name) {
    this.name = name;
  },
  SET_AVATAR(avatar) {
    this.avatar = avatar;
  },
  // user login
  login(userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((response) => {
          const { data } = response;
          this.SET_TOKEN(data.token);
          setToken(data.token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // get user info
  getInfo() {
    return new Promise((resolve, reject) => {
      getInfo(this.token)
        .then((response) => {
          const { data } = response;

          if (!data) {
            return reject('Verification failed, please Login again.');
          }

          const { name, avatar } = data;

          this.SET_NAME(name);
          this.SET_AVATAR(avatar);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // user logout
  logout() {
    return new Promise((resolve, reject) => {
      logout(this.token)
        .then(() => {
          removeToken(); // must remove  token  first
          resetRouter();
          this.RESET_STATE();
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken() {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      this.RESET_STATE();
      resolve();
    });
  },
};

export const useUserStore = defineStore('user', {
  state,
  actions,
});
