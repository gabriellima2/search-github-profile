import styled from 'styled-components';

export const MainContainer = styled.main`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 170px 170px 170px 1fr;
    grid-template-areas: 
    'profile following'
    'profile followers'
    'repos repos'
    'GithubLink GithubLink';
    gap: 30px;
    padding: 30px;

    section {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        border-radius: 15px;
        background-color: ${({ theme }) => theme.background.secondary};
        color: ${({ theme }) => theme.neutral};

        a {
            color: ${({ theme }) => theme.accent.primary};
            transition: all 0.2s ease-in;

            &:hover {
                color: ${({ theme }) => theme.accent.secondary};
            }
        }
    }

    @media screen and (max-width: 750px) {
        grid-template-columns: auto;
        grid-template-rows: 1fr 170px 170px 170px 170px;
        grid-template-areas: 
        'profile'
        'repos'
        'followers'
        'following'
        'GithubLink';
    }
`;


export const UserProfile = styled.section`
    background-color: red;
    grid-area: profile;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Photo = styled.img`
    clip-path: circle();
    width: 200px;
    height: 130px;
`;

export const Username = styled.p`
    font-size: 1.2em;
    font-weight: bold;
`;

export const Bio = styled.p`
    font-size: 1em;
`;

export const Title = styled.h1`
    font-size: 1.7em;
    letter-spacing: 2px;
`;

export const UserRepos = styled.section`
    grid-area: repos;
    height: 100%;
`;

export const UserFollowers = styled.section`
    grid-area: followers;
`;

export const UserFollowing = styled.section`
    grid-area: following;
`;

export const GithubLink = styled.div`
    grid-area: GithubLink;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        color: ${({ theme }) => theme.neutral};
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: bold;
        font-size: 1.1em;
        letter-spacing: 1px;
    }
`;

export const EmptyDataContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        color: ${({ theme }) => theme.neutral};
    }
`;

export const EmptyData = styled.i`
    font-size: 4em;
    color: ${({ theme }) => theme.neutral};
`;