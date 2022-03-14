import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
    return (
        <Wrapper>
            <Header searchBar={true} />
            <Main />
        </Wrapper>
    );
};
