import { Icon } from "@dgtx/icon";
import { Meta, StoryObj } from "@storybook/react";

Icon.displayName = "Icon";
const meta: Meta<typeof Icon> = {
  title: "Icon/Icon",
  component: Icon,
  argTypes: {
    name: {
      description: "The name of the icon ",
      options: [
        "applications",
        "arrow-caret-down",
        "arrow-caret-left",
        "arrow-caret-right",
        "arrow-double-left",
        "arrow-double-right",
        "arrow-long-down",
        "arrow-long-left",
        "arrow-long-right",
        "arrow-long-up",
        "arrow-short-down",
        "arrow-short-left",
        "arrow-short-right",
        "arrow-short-up",
        "arrow-vertical-left",
        "arrow-vertical-right",
        "checkbox-blank",
        "checkbox-indeterminate",
        "checkbox-selected",
        "checked-circle-blank",
        "checked-circle-selected",
        "check",
        "close",
        "delete",
        "dot",
        "download-cloud",
        "edit",
        "eye-available",
        "eye-invisible",
        "log",
        "logout",
        "reload",
        "role",
        "session",
        "setting",
        "sorter-acs",
        "sorter-des",
        "sorter-inactive",
        "unlock",
        "user-group",
      ],
      control: { type: "select" },
    },
    type: {
      description: "Define icon's type: filled or outline",
      options: ["filled", "outline"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "outline",
        },
      },
    },
    size: {
      control: { type: "number" },
      description: "Size for icon",
      table: {
        defaultValue: {
          summary: "16",
        },
      },
    },
    color: {
      control: { type: "text" },
      description: "Set the icon's color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Basic: Story = {
  args: {
    name: "applications",
  },
};

// export const Basic = () => <Icon name="applications" />;

export const AllIcon = () => (
  <>
    <div>
      <Icon name="applications"> Applications </Icon>
      <Icon name="arrow-caret-down" type="outline">
        Arrow-caret-down
      </Icon>
      <Icon name="arrow-caret-left"> Arrow-caret-left</Icon>
      <Icon name="arrow-caret-right"> Arrow-caret-right</Icon>
      <Icon name="arrow-double-left"> Arrow-double-left</Icon>
      <Icon name="arrow-double-right"> Arrow-double-right</Icon>
      <Icon name="arrow-long-down"> Arrow-long-down</Icon>
      <Icon name="arrow-long-left"> Arrow-long-left</Icon>
    </div>
    <div>
      <Icon name="arrow-long-right"> Arrow-long-right</Icon>
      <Icon name="arrow-long-up"> Arrow-long-up</Icon>
      <Icon name="arrow-short-down"> Arrow-short-down</Icon>
      <Icon name="arrow-short-left"> Arrow-short-left</Icon>
      <Icon name="arrow-short-right"> Arrow-short-right</Icon>
      <Icon name="arrow-short-up"> Arrow-short-up</Icon>
      <Icon name="arrow-vertical-left"> Arrow-vertical-left</Icon>
      <Icon name="arrow-vertical-right"> Arrow-vertical-right</Icon>
    </div>
    <div>
      <Icon name="checkbox-blank"> Checkbox-blank</Icon>
      <Icon name="checkbox-indeterminate"> Checkbox-indeterminate</Icon>
      <Icon name="checkbox-selected"> Checkbox-selected</Icon>
      <Icon name="checked-circle-blank"> Checked-circle-blank</Icon>
      <Icon name="checked-circle-selected"> Checked-circle-selected</Icon>
      <Icon name="logout"> Logout</Icon>
      <Icon name="reload"> Reload</Icon>
      <Icon name="check" type="filled">
        Check
      </Icon>
    </div>
    <div>
      <Icon name="session"> Session</Icon>
      <Icon name="setting"> Setting</Icon>
      <Icon name="close" type="filled">
        Close
      </Icon>
      <Icon name="unlock"> Unlock</Icon>
      <Icon name="download-cloud"> Download-cloud</Icon>
      <Icon name="dot"> Dot</Icon>
      <Icon name="delete"> Delete</Icon>
      <Icon name="edit"> Edit</Icon>
    </div>
    <div>
      <Icon name="eye-available" type="filled">
        Eye-available
      </Icon>
      <Icon name="eye-invisible" type="filled">
        Eye-invisible
      </Icon>
      <Icon name="log"> Log</Icon>
      <Icon name="role"> Role</Icon>
      <Icon name="sorter-acs"> Sorter-acs</Icon>
      <Icon name="sorter-des"> Sorter-des</Icon>
      <Icon name="sorter-inactive"> Sorter-inactive</Icon>
      <Icon name="user-group"> User-group</Icon>
    </div>
  </>
);
