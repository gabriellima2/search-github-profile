import styled from 'styled-components';

export const ListReposContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    height: 100%;
    overflow: hidden;
    h1 {
        color: ${({ theme }) => theme.neutral};
        text-align: center;
    }
    @media screen and (max-width: 750px) {
        height: 100vh;
    }
`;

export const ReposContainer = styled.div`
    margin-top: 50px;
    width: 90%;
    height: 90%;
    padding: 10px 0px 10px 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.background.secondary};
    div {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
`;

export const Repos = styled.li`
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.accent.secondary};
    background-color: ${({ theme }) => theme.background.tertiary};
    color: ${({ theme }) => theme.neutral};
    h2 {
        font-size: 1.6em;
        margin-bottom: 15px;
    }
    p {
        font-size: 1em;
        align-self: flex-start;
        margin-bottom: 30px;
    }
    a {
        font-size: 0.8em;
        margin-top: 20px;
        color: ${({ theme }) => theme.accent.primary};
        transition: all 0.2s ease-in;
        &:hover {
            color: ${({ theme }) => theme.accent.secondary};
        }
    }
`;

export const CreatedData = styled.span`
    font-size: 0.6em;
    color: ${({ theme }) => theme.neutral};
`;
