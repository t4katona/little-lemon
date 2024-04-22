import { render, screen } from "@testing-library/react";
import { BookingForm } from "./components/form/BookingForm";

test("Renders the BookingForm heading", () => {
  const availableTimesMock = ["10:00", "11:00", "12:00", "13:00"];
  const submitFormMock = {
    date: "2024-04-22",
    time: "10:00",
    guests: "1",
    occasion: "Birthday",
  };
  render(
    <BookingForm
      availableTimes={availableTimesMock}
      updateTimes="2024-04-22"
      submitForm={submitFormMock}
    />
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
