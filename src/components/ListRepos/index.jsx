import GoBackButton from "../GoBackButton";
import { ListReposContainer, Repos, ReposContainer } from "./styles";

export default function ListRepos(props) {
    return (
        <ListReposContainer>
            <GoBackButton />
            <h1>Repositórios de Gabriel</h1>
            <ReposContainer>
                <div>
                    <ul>
                        <Repos>
                            <h2>Titulo</h2>
                            <p>Descrição</p>
                            <a href="#">Ver no Github</a>
                        </Repos>
                    </ul>
                </div>
            </ReposContainer>
        </ListReposContainer>
    );
};
