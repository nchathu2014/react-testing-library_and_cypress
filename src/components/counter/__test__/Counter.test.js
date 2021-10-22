import React from "react";
import Counter from "./../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;
beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

// ========================== UI Elements Test
test("Header => Name validation", () => {
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("Counter Label =>  Label Initial Value to be 0", () => {
  const labelEl = getByTestId("counter-label");

  expect(labelEl.textContent).toBe("0");
});

test("Button Increment =>  Increment Button with + Sign", () => {
  const btnEl = getByTestId("btn-increment");

  expect(btnEl.textContent).toBe("+");
});

test("Button Decrement =>  Decrement Button with - Sign", () => {
  const btnEl = getByTestId("btn-decrement");

  expect(btnEl.textContent).toBe("-");
});

test("Input Box =>  Input Box with initial value 1", () => {
  const inputEl = getByTestId("input-box");

  expect(inputEl.value).toBe("1");
});

// ============================= Functional Test

test("Increment Button => Initial Click", () => {
  const btnEl = getByTestId("btn-increment");

  const labelEl = getByTestId("counter-label");

  expect(labelEl.textContent).toBe("0");

  //Clcik
  fireEvent.click(btnEl);

  expect(labelEl.textContent).toBe("1");
});

test("Decrement Button => Initial Click", () => {
  const btnEl = getByTestId("btn-decrement");

  const labelEl = getByTestId("counter-label");

  expect(labelEl.textContent).toBe("0");

  //Clcik
  fireEvent.click(btnEl);

  expect(labelEl.textContent).toBe("-1");
});

test("Input Box =>  Input Box onChange value set positive ", () => {
  const inputEl = getByTestId("input-box");

  expect(inputEl.value).toBe("1");
  fireEvent.change(inputEl, {
    target: {
      value: 10,
    },
  });
  expect(inputEl.value).toBe("10");
});

test("Input Box =>  Input Box onChange value set with Increment Button ", () => {
  const inputEl = getByTestId("input-box");
  const btnEl = getByTestId("btn-increment");
  const labelEl = getByTestId("counter-label");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: 10,
    },
  });

  //click tyhe button twise
  fireEvent.click(btnEl); // add 10
  fireEvent.click(btnEl); // another 10

  expect(labelEl.textContent).toBe("20");
});

test("Input Box =>  Input Box onChange value set with Decrement Button ", () => {
  const inputEl = getByTestId("input-box");
  const btnEl = getByTestId("btn-decrement");
  const labelEl = getByTestId("counter-label");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: 10,
    },
  });

  //click tyhe button twise
  fireEvent.click(btnEl); // add 10
  fireEvent.click(btnEl); // another 10

  expect(labelEl.textContent).toBe("-20");
});

test("Input Box =>  Input Box onChange value set with Both Increment & Decrement Buttons ", () => {
  const inputEl = getByTestId("input-box");
  const btnInCEl = getByTestId("btn-increment");
  const btnDecEl = getByTestId("btn-decrement");
  const labelEl = getByTestId("counter-label");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: 10,
    },
  });

  fireEvent.click(btnInCEl);
  fireEvent.click(btnInCEl);

  fireEvent.click(btnDecEl);
  fireEvent.click(btnDecEl);
  fireEvent.click(btnDecEl);

  fireEvent.click(btnInCEl);

  expect(labelEl.textContent).toBe("0");
});

test("Input Box =>  count value > 100, label comes green", () => {
  const inputEl = getByTestId("input-box");
  const btnInCEl = getByTestId("btn-increment");
  const btnDecEl = getByTestId("btn-decrement");
  const labelEl = getByTestId("counter-label");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: 90,
    },
  });

  expect(labelEl.className).toBe("");
  fireEvent.click(btnInCEl);
  fireEvent.click(btnInCEl);

  expect(labelEl.className).toBe("green");
});

test("Input Box =>  count value < -100, label comes red", () => {
  const inputEl = getByTestId("input-box");
  const btnInCEl = getByTestId("btn-increment");
  const btnDecEl = getByTestId("btn-decrement");
  const labelEl = getByTestId("counter-label");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: 90,
    },
  });

  expect(labelEl.className).toBe("");
  fireEvent.click(btnDecEl);
  fireEvent.click(btnDecEl);

  expect(labelEl.className).toBe("red");
});
