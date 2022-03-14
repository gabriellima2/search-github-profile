import { createGlobalStyle } from 'styled-components';

import Colors from './style/Colors';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Space Mono', monospace;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
      text-decoration: none;
  }

  li {
      list-style: none;
  }

  
  *::-webkit-scrollbar {
            width: 5px;
        }

  *::-webkit-scrollbar-track {
      background: none;
  }

  *::-webkit-scrollbar-thumb {
      background-color: ${Colors.complementary.dark.primary};
      border-radius: 10px;
  }
`;
