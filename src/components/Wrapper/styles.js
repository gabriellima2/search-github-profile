import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.neutral.primary};
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 750px) {
        height: 100%;
        width: 100%;
    }
`;
