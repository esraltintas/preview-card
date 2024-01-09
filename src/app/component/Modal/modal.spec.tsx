import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./modal";

describe("Modal component", () => {
  test("renders modal when isVisible is true", () => {
    render(
      <Modal isVisible={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalWrapper = screen.getByTestId("wrapper-modal");
    const modalContent = screen.getByText("Modal Content");

    expect(modalWrapper).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });
});
