import { useState, useContext, useEffect } from 'react';

import ThemeContext from '../../AppContext/ThemeContext';
import DataContext from '../../AppContext/DataContext';

import { verifyLocalStorage } from '../../utils/LocalStorage';

import { 
    BsSearch,
    BsToggleOff,
    BsToggleOn,
    BsHurricane
} from 'react-icons/bs';

import { 
    HeaderContainer,
    Logo,
    ElementsContainer,
    SearchBar,
    ButtonToggleTheme
} from './styles';

const BASE_URL = 'https://api.github.com/users/';

export default function Header(props) {
    const [ username, setUsername ] = useState('');

    const themeCTX = useContext(ThemeContext);
    const dataCTX = useContext(DataContext);

    const [ buttonToggle, setButtonToggle ] = useState(
        () => {
            const data = verifyLocalStorage('theme');
            return data === 'dark' ? 'on' : 'off';
        }
    );

    const handleClick = () => {
        setButtonToggle( current => current === 'off' ? 'on' : 'off' );
        themeCTX.toggleTheme();
    };

    const handleKeyPress = e => {
        if ( e.code === 'Enter' ) {
            validateValue();
        };
    };

    const handleChange = ({ target }) => {
        setUsername(target.value);
    };

    const validateValue = () => {
        if ( !username ) return;

        request();
    };

    const request = async () => {
        try {
            const dataResponse = await fetch(`${BASE_URL}${username}`, {method: 'GET'});
            const reposResponse = await fetch(`${BASE_URL}${username}/repos`, {method: 'GET'})
            const data = await dataResponse.json();
            const repos = await reposResponse.json();

            dataCTX.setUserData(data);
            dataCTX.setUserRepos(repos);
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <HeaderContainer>
            <Logo>{<BsHurricane />}ProjectLima</Logo>
            <ElementsContainer>
                {
                    props.searchBar && 
                    <SearchBar>
                        <input
                            type="text"
                            placeholder='Pesquise'
                            onKeyPress={handleKeyPress}
                            onChange={handleChange}
                            value={username}
                        />
                        <button
                            onClick={validateValue}>
                        { <BsSearch /> }</button>
                    </SearchBar>
                }
                <ButtonToggleTheme
                    onClick={ handleClick }>
                    { buttonToggle === 'off' ? <BsToggleOff /> : <BsToggleOn /> }
                </ButtonToggleTheme>
            </ElementsContainer>
        </HeaderContainer>
    );
};
