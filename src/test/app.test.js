import { render, fireEvent, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import Component from "@/App.vue";
import {
  required,
  confirmed,
  length,
  email,
  max_value,
  digits,
  max,
  min,
} from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", required);
extend("equal_to", confirmed);
extend("length", length);
extend("email", email);
extend("max_value", max_value);
extend("digits", digits);
extend("max", max);
extend("min", min);

test("test", async () => {
  // The render method returns a collection of utilities to query your component.
  render(Component);
  const saveButton = await screen.findByRole("button", { name: "Submit" });

  await fireEvent.click(saveButton);
});
