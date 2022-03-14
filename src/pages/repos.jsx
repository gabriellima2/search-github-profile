import { useContext } from 'react';

import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import ListRepos from '../components/ListRepos';

import ThemeContext from '../AppContext/ThemeContext';

export default function Repos() {
    const ctx = useContext(ThemeContext);
    
    return (
        <Wrapper>
            <Header toggleTheme={ctx.toggleTheme}/>
            <ListRepos />
        </Wrapper>
    );
};
