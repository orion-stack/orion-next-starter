import type { Meta, StoryObj } from "@storybook/nextjs";
import { AnimatedRocket } from "./animated-rocket";

const meta = {
  title: "Components/AnimatedRocket",
  component: AnimatedRocket,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AnimatedRocket>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
