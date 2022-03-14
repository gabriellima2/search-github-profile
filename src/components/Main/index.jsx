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
    GithubLink,
    EmptyData,
    EmptyDataContainer
} from './styles';

import { BsGithub, BsPersonFill } from 'react-icons/bs';

import { Link } from 'react-router-dom';

import { useContext } from 'react';
import DataContext from '../../AppContext/DataContext';

export default function Main() {
    const dataCTX = useContext(DataContext);
    const { userData } = dataCTX;

    if ( !userData ) {
        return (
            <EmptyDataContainer>
                <EmptyData>{ <BsPersonFill /> }</EmptyData>
                <p>Nenhum dado para mostrar, faça uma pesquisa.</p>
            </EmptyDataContainer>
        );
    };

    return (
        <MainContainer>
            <UserProfile>
                <Photo src={ userData.avatar_url } alt={ userData.login } />
                <Username>{ userData.login }</Username>
                <Bio>{ userData.bio }</Bio>
            </UserProfile>

            <UserFollowing>
                <Title>Seguindo</Title>
                <p>TOTAL: { userData.following }</p>
                <Link to='/following'>Ver Seguindo</Link>
            </UserFollowing>

            <UserFollowers>
                <Title>Seguidores</Title>
                <p>TOTAL: { userData.followers }</p>
                <Link to='/followers'>Ver Seguidores</Link>
            </UserFollowers>
            
            <UserRepos>
                <Title>Repositórios</Title>
                <p>TOTAL: { userData.public_repos }</p>
                <Link to='/repos'>Ver Todos</Link>
            </UserRepos>

            <GithubLink>
                <a href="#">Projeto {<BsGithub/>}</a>
            </GithubLink>
        </MainContainer>        
    );
};
