import { render, fireEvent, screen } from "@testing-library/vue";
import Component from "@/components/base/BaseButton.vue";
import { vi } from "vitest";

test.skip("increments value on click", async () => {
  // The render method returns a collection of utilities to query your component.
  render(Component, {
    routes: [
      {
        path: "/",
        name: "root",
      },
      {
        path: "/2",
        name: "page2",
      },
    ],
  });
  await new Promise((r) => setTimeout(r, 4000));
  screen.debug();
});
