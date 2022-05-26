<template>
  <div id="app">
    <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form">
      <form @submit.prevent="submit()">
        <ValidationProvider name="email" rules="required" v-slot="{ errors }">
          <input type="text" v-model="email" placeholder="type some email" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <button>Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      email: "",
      greeting: "",
    };
  },
  methods: {
    async submit() {
      console.log("submit");
      console.log(this.$refs.observer.refs);
      const isValid = await this.$refs.observer.validate();

      console.log(this.$refs.observer.refs);
      //   if (!isValid) {
      //     // ABORT!!
      //   }

      //   // 🐿 ship it
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 100px 60px 60px 60px;
}
</style>
