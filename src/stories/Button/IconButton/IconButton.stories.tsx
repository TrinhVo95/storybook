import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@dgtx/button";

IconButton.displayName = "IconButton";

const meta = {
  title: "Button/IconButton",
  component: IconButton,
  argTypes: {
    icon: {
      description: "Icon to be rendered",
      options: {
        check: { name: "check" },
      },
      // options: [
      //   "applications",
      //   "arrow-caret-down",
      //   "arrow-caret-left",
      //   "arrow-caret-right",
      //   "arrow-double-left",
      //   "arrow-double-right",
      //   "arrow-long-down",
      //   "arrow-long-left",
      //   "arrow-long-right",
      //   "arrow-long-up",
      //   "arrow-short-down",
      //   "arrow-short-left",
      //   "arrow-short-right",
      //   "arrow-short-up",
      //   "arrow-vertical-left",
      //   "arrow-vertical-right",
      //   "checkbox-blank",
      //   "checkbox-indeterminate",
      //   "checkbox-selected",
      //   "checked-circle-blank",
      //   "checked-circle-selected",
      //   "check",
      //   "close",
      //   "delete",
      //   "dot",
      //   "download-cloud",
      //   "edit",
      //   "eye-available",
      //   "eye-invisible",
      //   "log",
      //   "logout",
      //   "reload",
      //   "role",
      //   "session",
      //   "setting",
      //   "sorter-acs",
      //   "sorter-des",
      //   "sorter-inactive",
      //   "unlock",
      //   "user-group",
      // ],
      control: {
        type: "select",
      },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the icon should be disabled or not",
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: "true | false",
        },
      },
    },
    active: {
      control: { type: "boolean" },
      description: "Displays the active state",
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: "true | false",
        },
      },
    },
    className: {
      description: "Override or extend the styles applied to the component.",
      control: { type: "text" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconBtn: Story = {
  args: {
    icon: {
      name: "applications",
    },
  },
};

export const DisabledIcon: Story = {
  args: {
    icon: {
      name: "user-group",
    },
    disabled: true,
  },
};

export const ActiveIcon: Story = {
  args: {
    icon: {
      name: "arrow-caret-down",
    },
    active: true,
  },
};
