import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// // Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
   // Arrange - render the compoment in order to test
    render(<CheckoutForm />);

    // Act- grab the header element 
    const header = screen.getByText(/checkout form/i);
    
    // Assert- expect that the header is in the document 
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", () => {
    // render the compoment in order to test
    render(<CheckoutForm />);

    // check for labels then input values
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);

    // input values
    fireEvent.change(firstName, {target: { value: 'John'}}); 
    fireEvent.change(lastName, {target: { value: 'Johnson'}}); 
    fireEvent.change(address, {target: { value: '123 Main St'}}); 
    fireEvent.change(city, {target: { value: 'Columbia'}});
    fireEvent.change(state, {target: { value: 'SC'}});
    fireEvent.change(zip, {target: { value: '29220'}});
    
    // grab the button element and click
    const button = screen.getByTestId(/submitBtn/i);
    fireEvent.click(button);

    // assert that success message is in the document 
    // const buyer = screen.getByText(/john/i);
    const successMessage =  screen.getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();

});

