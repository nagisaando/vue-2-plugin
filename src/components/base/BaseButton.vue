<!-- *************************************************************************
    SCRIPT
    ************************************************************************* -->
<script setup>
/**
 * This component renders a button.
 */
import { computed, useAttrs } from "@vue/composition-api";
import { BButton } from "bootstrap-vue";
import { useNotificationsStore } from "@/stores/notifications";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  variant: {
    default: "",
    validator: (prop) =>
      ["secondary", "link", "primary", "danger", ""].includes(prop),
  },
  icon: {
    type: String,
    default: null,
  },
  clearNotifications: {
    type: Boolean,
    default: true,
  },
  clearNotificationsFor: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["click"]);

const attrs = useAttrs();
/**
 * Returns the button variant
 * @returns {String}
 */
const buttonVariant = computed(() => {
  switch (props.variant) {
    case "link":
      return "link";
    case "primary":
      return "primary";
    case "danger":
      return "danger";
    default:
      return "outline-secondary";
  }
});

/**
 * Handle on click event.
 */

const notificationsStore = useNotificationsStore();

function onClick(evt) {
  if (this.clearNotifications) {
    notificationsStore.clearNotifications(this.clearNotificationsFor);
  }
  emit("click", evt);
}
</script>
<script>
export default {
  name: "BaseButton",
};
</script>
<!-- *************************************************************************
    TEMPLATE
    ************************************************************************* -->
<template>
  <BButton
    pill
    :variant="buttonVariant"
    v-bind="attrs"
    @click="onClick($event)"
  >
    {{ label }} <FontAwesomeIcon v-if="icon" :icon="icon" />
  </BButton>
</template>
<!-- *************************************************************************
    STYLE
    ************************************************************************* -->
<style lang="scss" @scoped>
.btn {
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  padding: 12px 33px;
  margin: 0 10px 20px 0;

  &.btn-outline-secondary {
    border: 1px solid #0079ad;
    color: #0079ad;
    &:hover,
    &:focus {
      border: 1px solid #005274;
      background-color: #005274;
      color: white;
    }
  }
  &.btn-link {
    color: #0079ad;
  }
  &.btn-primary {
    background-color: #0070a3;
    border-color: #0070a3;
    &:hover,
    &:focus {
      border: 1px solid #005274;
      background-color: #005274;
      color: white;
    }
  }
}
</style>
