import type { Preview } from "@storybook/react";
import React from "react";
import { GlobalStyles } from "@dgtx/utils";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          {Story()}
        </div>
      </>
    ),
  ],
};

export default preview;
