import styled from 'styled-components';

export const HeaderContainer = styled.header`
    grid-area: header;
    height: 140px;
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.complementary.secondary};
    background-color: ${({ theme }) => theme.background.secondary};
    position: relative;
`;

export const Logo = styled.h1`
    font-size: 1.3em;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    gap: 5px;

    @media screen and (max-width: 750px) {
        font-size: 1em;
    }
`;

export const ElementsContainer = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`;

export const ButtonToggleTheme = styled.button`
    border: none;
    padding: 2px 7px;
    display: flex;
    align-items: center;
    font-size: 1.7em;
    color: ${({ theme }) => theme.complementary.primary};
    background: none;
    cursor: pointer;
`;

export const SearchBar = styled.div`
    display: flex;
    background: none;
    border-radius: 40px;
    padding: 5px 5px 5px 15px;
    height: 45px;

    &:hover {
        input {
            width: 150px;
            opacity: 1;
            display: block;
        }
    }

    input {
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.accent.primary};
        color: ${({ theme }) => theme.neutral};
        background: none;
        outline: none;
        padding: 5px;
        width: 0;
        opacity: 0;
        transition: all 0.3s ease-in-out;

        &::-webkit-input-placeholder {
            color: ${({ theme }) => theme.neutral};
        }
        &::-moz-placeholder  {
            color: ${({ theme }) => theme.neutral};
        }
        &:-moz-placeholder  {
            color: ${({ theme }) => theme.neutral};
        }
        &:-ms-input-placeholder  {
            color: ${({ theme }) => theme.neutral};
        }
    }

    button {
        border: none;
        font-size: 1.3em;
        padding: 4px 8px;
        display: flex;
        align-items: center;
        cursor: pointer;
        background: none;
        color: ${({ theme }) => theme.neutral};

        @media screen and (max-width: 750px) {
            font-size: 1.1em;
            padding: 3px 7px;
        }
    }

    @media screen and (max-width: 600px) {
        position: absolute;
        bottom: 5%;
        left: 10%;
        width: 80%;
        justify-content: space-between;
        height: 35px;

        input {
            width: 100% !important;
            opacity: 1 !important;
        }
    }
`;
