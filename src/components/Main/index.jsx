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

import Test from '../../public/img/lobo1.jpg';

export default function Main() {
    return (
        <MainContainer>
            <UserProfile>
                <Photo src={Test} alt='gabriellima2' />
                <Username>gabriellima2</Username>
                <Bio>Web Front End | Javascript</Bio>
            </UserProfile>

            <UserFollowing>
                <Title>Seguindo</Title>
                <p>Total: 2</p>
                <Link to='/following'>Ver Seguindo</Link>
            </UserFollowing>

            <UserFollowers>
                <Title>Seguidores</Title>
                <p>Total: 8</p>
                <Link to='/followers'>Ver Seguidores</Link>
            </UserFollowers>
            
            <UserRepos>
                <Title>Repositórios</Title>
                <p>Total: 11</p>
                <Link to='/repos'>Ver Todos</Link>
            </UserRepos>

            <GithubLink>
                <a href="#">Projeto {<BsGithub/>}</a>
            </GithubLink>
        </MainContainer>        
    );
};
