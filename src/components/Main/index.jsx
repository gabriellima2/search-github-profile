import {
    MainContainer,
    UserProfile,
    Title,
    Photo,
    Username,
    Bio,
    UserFollowers,
    UserRepos,
    UserFollowing,
    GithubLink
} from './styles';

import { BsGithub } from 'react-icons/bs';

import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <MainContainer>
            <UserProfile>
                <Photo src='' alt='' />
                <Username>USERNAME</Username>
                <Bio>BIO</Bio>
            </UserProfile>

            <UserFollowing>
                <Title>Seguindo</Title>
                <p>Total: </p>
                <Link to='/following'>Ver Seguindo</Link>
            </UserFollowing>

            <UserFollowers>
                <Title>Seguidores</Title>
                <p>Total: </p>
                <Link to='/followers'>Ver Seguidores</Link>
            </UserFollowers>
            
            <UserRepos>
                <Title>Repositórios</Title>
                <p>Total: </p>
                <Link to='/repos'>Ver Todos</Link>
            </UserRepos>

            <GithubLink>
                <a href="#">Projeto {<BsGithub/>}</a>
            </GithubLink>
        </MainContainer>        
    );
};
