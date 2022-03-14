import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import UserInformation from '../components/UserInformation';

import { useContext } from 'react';
import ThemeContext from '../AppContext/ThemeContext';

export default function Following() {
    const ctx = useContext(ThemeContext);

    return (
        <Wrapper>
            <Header toggleTheme={ctx.toggleTheme}/>
            <UserInformation title='Seguindo'/>
        </Wrapper>
    );
};
