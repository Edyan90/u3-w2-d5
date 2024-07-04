import { fireEvent, render, screen } from "@testing-library/react";
import App from "../src/App";
import { expect } from "vitest";

import BookList from "../src/Components/BookList";
import CommentArea from "../src/Components/CommentArea";

describe("App", () => {
  //**********************1*********************** */
  it("Welcome è stato caricato?", () => {
    render(<App />);
    const welcomeElement = screen.getByText(/lorem ipsum/i);
    expect(welcomeElement).toBeInTheDocument();

    /*  screen.debug(); */ // prints out the jsx in the App component unto the command line
  });
  //**********************2********************** */
  it("le card esistono e conta quante sono", async () => {
    render(<BookList />);
    const cardElements = await screen.findAllByAltText("card");
    // Verifica che ci sia almeno un elemento
    expect(cardElements.length).toBeGreaterThan(0);
    // Stampa o verifica il numero di elementi trovati
    console.log(`Number of card elements: ${cardElements.length}`);
    // Se vuoi verificare un numero specifico di elementi
    expect(cardElements.length).toBe(150);
  });
  //***********************3********************** */
  it("CommentArea esiste?", () => {
    render(<CommentArea />);
    const commentElement = screen.getByText(/inserisci il tuo feedback/i);
    expect(commentElement).toBeInTheDocument();
  });
  //***********************4********************** */
  /*   it("Esiste l'input Search:", () => {
    render(<BookList />);
    const ricerca = screen.getByPlaceholderText(/search/i);
    fireEvent.click(ricerca);
    expect(ricerca).toHaveFocus();
  }); */
  //************************5********************* */
  it("libro cliccato con bordo", async () => {
    render(<BookList />);
    const cardBordo = await screen.findAllByAltText("card");
    console.log(cardBordo[0]);
    fireEvent.click(cardBordo[0]);
    expect(cardBordo[0]).toHaveStyle("3px solid crimson");
  });
});
