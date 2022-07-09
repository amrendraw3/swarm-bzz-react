import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InfoCard from "./components/Card";

describe("Info card", () => {
  test("renders default state", () => {
    const { getByTestId } = render(<InfoCard />);

    const bzzInput = getByTestId("bzz-input");
    const daiInput = getByTestId("dai-input");
    const calculate = getByTestId("calculate-dai-submit");

    expect(bzzInput).toBeInTheDocument();
    expect(daiInput).toBeInTheDocument();
    expect(calculate).toBeInTheDocument();

    expect(bzzInput.value).toBe("");
    expect(daiInput.value).toBe("");
    expect(calculate).toHaveClass("Mui-disabled");

    expect(bzzInput).toHaveAttribute("type", "number");
    expect(daiInput).toHaveAttribute("type", "number");
  });

  test("keeps the calculate button disabled when only bzz supply provided", () => {
    const { getByTestId } = render(<InfoCard />);

    const bzzInput = getByTestId("bzz-input");
    const calculate = getByTestId("calculate-dai-submit");

    fireEvent.change(bzzInput, { target: { value: 123 } });
    expect(calculate).toHaveClass("Mui-disabled");
  });

  test("keeps the calculate button disabled when only dai amount provided", () => {
    const { getByTestId } = render(<InfoCard />);

    const daiInput = getByTestId("dai-input");
    const calculate = getByTestId("calculate-dai-submit");

    fireEvent.change(daiInput, { target: { value: 123 } });
    expect(calculate).toHaveClass("Mui-disabled");
  });

  test("enables the submit button when the form is filled out", () => {
    const { getByTestId } = render(<InfoCard />);

    const bzzInput = getByTestId("bzz-input");
    const daiInput = getByTestId("dai-input");
    const calculate = getByTestId("calculate-dai-submit");

    fireEvent.change(bzzInput, { target: { value: 123 } });
    fireEvent.change(daiInput, { target: { value: 123 } });

    expect(calculate).not.toHaveClass("Mui-disabled");
  });
});
