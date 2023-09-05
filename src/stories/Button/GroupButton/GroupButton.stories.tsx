import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonGroup } from "@dgtx/button";

ButtonGroup.displayName = "ButtonGroup";
Button.displayName = "Button";

const meta = {
  title: "Button/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    children: {
      description: "The content of the component.",
      table: {
        defaultValue: {
          summary: "ReactNode",
        },
      },
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
      description: "The component orientation (layout flow direction).",
      table: {
        defaultValue: {
          summary: "horizontal",
        },
        type: { summary: "horizontal | vertical" },
      },
    },
    className: {
      description: "Override or extend the styles applied to the component.",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const BtnGroupDefault: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Primary</Button>
      <Button active>Primary</Button>
      <Button>Primary</Button>
    </ButtonGroup>
  ),
};

// export const BtnGroupDefault = () => (
//   <ButtonGroup>
//     <Button>Primary</Button>
//     <Button active>Primary</Button>
//     <Button>Primary</Button>
//   </ButtonGroup>
// );

export const BtnGroupVer = () => (
  <ButtonGroup orientation="vertical">
    <Button active>Primary</Button>
    <Button>Primary</Button>
    <Button>Primary</Button>
  </ButtonGroup>
);
