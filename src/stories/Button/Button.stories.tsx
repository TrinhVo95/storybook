import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@dgtx/button";
import { Icon } from "@dgtx/icon";

Button.displayName = "Button";
Icon.displayName = "Icon";
const meta = {
  title: "Button/Button",
  component: Button,
  argTypes: {
    children: {
      description: "The content of the component.",
    },
    variant: {
      options: ["primary", "outline-secondary", "secondary"],
      control: { type: "select" },
      description: "Set button type",
      table: {
        defaultValue: {
          summary: "primary",
        },
        type: {
          summary: "primary | outline-secondary | secondary",
        },
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
      description: "The size of the button",
      table: {
        defaultValue: {
          summary: "md",
        },
        type: {
          summary: "sm | md | lg",
        },
      },
    },
    disabled: {
      type: "boolean",
      description: "Whether the button should be disabled or not",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    active: {
      type: "boolean",
      description: "Displays the active state",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    icon: {
      description: "Add icon to button",
      options: ["applications", "arrow-caret-down"],
      control: { type: "select" },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    className: {
      description: "Override or extend the styles applied to the component.",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {
  args: {
    variant: "primary",
    children: "Primary",
    icon: <Icon name="applications" />,
  },
};

export const ButtonType = () => (
  <>
    <Button>Primary</Button>
    <Button variant="outline-secondary">Outline-secondary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button icon={<Icon name="applications" />}>Primary</Button>
  </>
);

export const ButtonSizes = () => (
  <>
    <Button size="sm">Primary</Button>
    <Button size="md">Primary</Button>
    <Button size="lg">Primary</Button>
  </>
);

export const ButtonDisabled = () => (
  <>
    <Button disabled>Primary</Button>
    <Button variant="outline-secondary" disabled>
      Outline-secondary
    </Button>
    <Button variant="secondary" disabled>
      Secondary
    </Button>
  </>
);

export const ButtonActive = () => (
  <>
    <Button active>Primary</Button>
    <Button variant="outline-secondary" active>
      Outline-secondary
    </Button>
    <Button variant="secondary" active>
      Secondary
    </Button>
  </>
);
