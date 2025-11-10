import type { Meta, StoryObj } from "@storybook/nextjs";
import { TranslatedContent } from "./translated-content";

const meta = {
  title: "Components/TranslatedContent",
  component: TranslatedContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TranslatedContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
