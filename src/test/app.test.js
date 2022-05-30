import { render, fireEvent, screen } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";
import Component from "../App.vue";
import { setActivePinia, createPinia, PiniaVuePlugin } from "pinia";
import { BButton } from "bootstrap-vue";
import { useCounterStore } from "@/stores/useCounter";
import vueCompositionApi from "@vue/composition-api";
test("increments value on click", async () => {
  // The render method returns a collection of utilities to query your component.
  const { getByText } = render(
    Component,
    {
      pinia: createPinia(),
      stubs: {
        // used to register custom components
        "b-button": BButton,
      },
    },
    (vue) => {
      vue.use(vueCompositionApi);
      vue.use(PiniaVuePlugin);
    }
  );

  //   const store = useCounterStor();

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  screen.getByText("Times clicked: 0");

  // const button = getByText("increment");
  // console.log("buuuuutttoooooon ");
  // console.log(button);

  // // Dispatch a native click event to our button element.
  // await fireEvent.click(button);
  // //   await fireEvent.click(button);

  // screen.getByText("Times clicked: 1");
});
