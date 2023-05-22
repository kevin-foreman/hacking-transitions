import React from "react";
import { render, screen } from '@testing-library/react'
import { expect, describe, it } from 'vitest'
import App from '../App/App'
import LeftColumnContext from '../../context/LeftColumnContext'

describe('App', () => {
  it('renders the App component correctly', () => {
    const mockValue = {
      cohortClicked: '',
      renderStudent: false,
      cohorts: []
    }

    render(
      <LeftColumnContext.Provider value={mockValue}>
        <App />
      </LeftColumnContext.Provider>
    );

    // assuming the Header, Footer, LeftColumn, Register and Login components render some text or a title with their names
    const headerElement = screen.getby('header');
    expect(headerElement).to.not.be.null;
  });
});