import { render, screen } from '@testing-library/react'
import { expect, describe, it } from 'vitest'
import App from './App'
import LeftColumnContext from '../context/LeftColumnContext'

describe('App', () => {
  it('renders the App component correctly', () => {

    const mockValue = {
      cohortClicked: '',
      renderStudent: false
    }

    render(
      <LeftColumnContext.Provider value={mockValue}>
        <App />
      </LeftColumnContext.Provider>
    );

    // assuming the Header, Footer, LeftColumn, Register and Login components render some text or a title with their names
    const headerElement = screen.getByText(/Header/i);
    expect(headerElement).toBeInTheDocument();

    const registerElement = screen.getByText(/Register/i);
    expect(registerElement).toBeInTheDocument();

    const loginElement = screen.getByText(/Login/i);
    expect(loginElement).toBeInTheDocument();

    const leftColumnElement = screen.getByText(/LeftColumn/i);
    expect(leftColumnElement).toBeInTheDocument();

    const footerElement = screen.getByText(/Footer/i);
    expect(footerElement).toBeInTheDocument();

    // assuming the StudentDetail component and RightColumn not render when renderStudent is false and cohortClicked is ''
    const studentDetailElement = screen.queryByText(/StudentDetail/i);
    expect(studentDetailElement).not.toBeInTheDocument();

    const rightColumnElement = screen.queryByText(/RightColumn/i);
    expect(rightColumnElement).not.toBeInTheDocument();
  });
});