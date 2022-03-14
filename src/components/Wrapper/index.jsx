import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "../../AppContext/ThemeContext";
import { GlobalStyle } from "../../GlobalStyles";
import { Container } from "./styles";

export default function Wrapper({ children }) {
    const ctx = useContext(ThemeContext);

    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={ctx.currentTheme}>
                <Container>
                    <ThemeProvider theme={ctx.currentTheme}>
                        {children}
                    </ThemeProvider>
                </Container> 
            </ThemeProvider>
        </>
    );
};
