import defaultSettings from '@/settings';
import { defineStore } from 'pinia';

const { showSettings, fixedHeader, sidebarLogo } = defaultSettings;

const state = () => ({
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
});

const actions = {
  CHANGE_SETTING: ({ key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (this.hasOwnProperty(key)) {
      this[key] = value;
    }
  },
  changeSetting(data) {
    this.CHANGE_SETTING(data);
  },
};

export const useSettingsStore = defineStore('settings', {
  state,
  actions,
});
