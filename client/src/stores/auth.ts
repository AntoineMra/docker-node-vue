import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isAuthorize: JSON.parse(localStorage.getItem('isAuthorize')) || false,
      accessToken: localStorage.getItem('accessToken') || '',
    }
  },
  getters: {
    getAccessToken: state => state.accessToken,
    getIsAuthorize: state => state.isAuthorize
  },
  actions: {
    signin() {
      //
    },
    login() {
      //
    }
  },
})
