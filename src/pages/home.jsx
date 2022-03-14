import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Main from '../components/Main';

import { useContext } from 'react';
import ThemeContext from '../AppContext/ThemeContext';

export default function Home(props) {
    const ctx = useContext(ThemeContext);
    console.log(props)
    return (
        <Wrapper>
            <Header searchBar={true} toggleTheme={ctx.toggleTheme}/>
            <Main />
        </Wrapper>
    );
};
