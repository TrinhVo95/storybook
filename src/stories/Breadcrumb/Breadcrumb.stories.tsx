import { Breadcrumb } from "@dgtx/breadcrumb";
import { Meta, StoryObj } from "@storybook/react";

Breadcrumb.displayName = "Breadcrumb";
const meta = {
  title: "NAVIGATION/Breadcrumb",
  component: Breadcrumb,
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    data: {
      description: `The routing stack information of router.
      - Title: Item Name 
      - Path: Connected path.Each path will connect with prev one.
      - Method: Default is the "to" method that uses internal routing. Method "href" is hyper link`,
      table: {
        type: { summary: "data[]" },
      },
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Basic: Story = {
  args: {
    data: [
      {
        title: "Identity",
        path: "https://mui.com/material-ui/api/breadcrumbs/",
        method: "href",
      },
      {
        title: "Account Settings",
        path: "/def",
        method: "href",
      },
      { title: "Sessions", method: "href" },
      {
        title: "Create Sessions",
        method: "href",
      },
    ],
  },
};
