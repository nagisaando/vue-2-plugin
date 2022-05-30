import { defineStore } from "pinia";
import Vue from "vue";

const ERROR_ALERT_VARIANT = "danger";
const WARNING_ALERT_VARIANT = "warning";
const INFO_ALERT_VARIANT = "info";
const SUCCESS_ALERT_VARIANT = "success";
const DEFAULT_TARGET = "global";

export const useNotificationsStore = defineStore("notificationsStore", {
  state: () => ({
    targets: {},
  }),
  actions: {
    addNotification(notification) {
      let { message, target, variant } = notification;
      if (!target) {
        target = DEFAULT_TARGET;
      }
      if (!this.targets[target]) {
        // Vue.set is required in Vue 2
        Vue.set(this.targets, target, []);
      }
      this.targets[target].push({ message, variant });
    },
    notifyError(notification) {
      const { message, target } = notification;
      this.addNotification({ message, variant: ERROR_ALERT_VARIANT, target });
    },
    notifyWarning(notification) {
      const { message, target } = notification;
      this.addNotification({ message, variant: WARNING_ALERT_VARIANT, target });
    },
    notifyInfo(notification) {
      const { message, target } = notification;
      this.addNotification({ message, variant: INFO_ALERT_VARIANT, target });
    },
    notifySuccess(notification) {
      const { message, target } = notification;
      this.addNotification({ message, variant: SUCCESS_ALERT_VARIANT, target });
    },
    clearNotifications(target) {
      target ? Vue.set(this.targets, target, []) : (this.targets = {});
    },
  },
});
