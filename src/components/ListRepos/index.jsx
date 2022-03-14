import { useContext } from 'react';
import DataContext from '../../AppContext/DataContext';
import GoBackButton from '../GoBackButton';
import { ListReposContainer, Repos, ReposContainer, CreatedData } from './styles';

export default function ListRepos() {
    const dataCTX = useContext(DataContext);
    const { userRepos, userData } = dataCTX;

    return (
        <ListReposContainer>
            <GoBackButton />
            <h1>Repositórios de { userData.login }</h1>
            <ReposContainer>
                <div>
                    <ul>
                        {
                            userRepos.map( repo => (
                                <Repos key={repo.id}>
                                    <h2>{ repo.name }</h2>
                                    <p>{ repo.description }</p>
                                    <CreatedData>{ repo.created_at }</CreatedData>
                                    <a
                                        href={ repo.html_url }
                                        target='_blank'>
                                        Ver no Github
                                    </a>
                                </Repos>
                            ))
                        }
                    </ul>
                </div>
            </ReposContainer>
        </ListReposContainer>
    );
};
