import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as TaskListStories from "./TaskList.stories"; //👈  Our stories imported here

//👇 composeStories will process all information related to the component (e.g., args)
const { WithPinnedTasks } = composeStories(TaskListStories);

it("renders pinned tasks at the start of the list", () => {
  render(<WithPinnedTasks />);
  expect(screen.getByTestId("test0").value).toBe("Task 6 (pinned)");
});
