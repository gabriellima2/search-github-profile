import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import UserInformation from '../components/UserInformation';

import ThemeContext from '../AppContext/ThemeContext';
import { useContext } from 'react';

export default function Followers() {
    const ctx = useContext(ThemeContext)

    return (
        <Wrapper>
            <Header toggleTheme={ ctx.toggleTheme }/>
            <UserInformation title='Seguidores'/>
        </Wrapper>
    );
};
