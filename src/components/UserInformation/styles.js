import styled from "styled-components";

export const UserInformationContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.neutral};
    font-size: 1.8em;
`;

export const UserContainer = styled.div`
    width: 100%;
    max-width: 800px;
    height: 90%;
    margin-top: 40px;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.background.secondary};

    ul {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
`;

export const Users = styled.li`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.accent.secondary};
    background-color: ${({ theme }) => theme.background.tertiary};
`;

export const ProfilePhoto = styled.img`
    width: 150px;
    clip-path: circle();
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    p {
        color: ${({ theme }) => theme.neutral};
        font-size: 1.1em;
    }

    a {
        color: ${({ theme }) => theme.accent.primary};
        font-size: 0.8em;
        transition: all 0.2s ease-in;

        &:hover {
            color: ${({ theme }) => theme.accent.secondary};
        }
    }
`;
