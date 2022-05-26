<script setup>
import { BButton, BLink } from "bootstrap-vue";
</script>

<template>
  <div>
    <BButton :to="{ name: 'page2' }">click</BButton>
    <BLink :to="{ name: 'page2' }">click</BLink>
  </div>
</template>
