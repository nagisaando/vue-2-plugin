import { render, screen } from "@testing-library/vue";
import { describe, expect, it, vi } from "vitest";

import { createTestingPinia } from "@pinia/testing";
import { PiniaVuePlugin } from "pinia";
import BaseButton from "../../../components/base/BaseButton.vue";
import "@testing-library/jest-dom";

describe("BaseButton.vue", async () => {
  it('Render link instead of button when there is "to" prop', async () => {
    const props = { label: "Click", to: { name: "members.new" } };
    render(
      BaseButton,
      {
        props,
        pinia: createTestingPinia({ createSpy: vi.fn }), // using mock pinia
      },
      (vue) => {
        vue.use(PiniaVuePlugin);
      }
    );
    const link = screen.getByRole("link", { name: props.label });
    expect(link).toBeInTheDocument();
  });
});
