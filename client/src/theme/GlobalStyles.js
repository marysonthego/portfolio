import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body, .navbar{
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  h1, h2, h3, .intro {
    color: ${({ theme }) => theme.colors.navbar.text};
  }

  code {
    color: ${({ theme }) => theme.colors.code};
  }

  .codeLocal {
    background: ${({ theme }) => theme.colors.codeLocal.background};
  }



`;
