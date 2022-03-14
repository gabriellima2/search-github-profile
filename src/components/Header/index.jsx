import { useState } from 'react';

import {
    verifyLocalStorage,
    addInStorage
} from '../../utils/LocalStorage';

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

export default function Header(props) {
    const [ buttonToggle, setButtonToggle ] = useState(
        () => {
            const data = verifyLocalStorage('theme');
            return data === 'dark' ? 'on' : 'off';
        }
    );

    const handleClick = () => {
        setButtonToggle( current => current === 'off' ? 'on' : 'off' );
        props.toggleTheme();
    };

    return (
        <HeaderContainer>
            <Logo>{<BsHurricane />}ProjectLima</Logo>
            <ElementsContainer>
                {
                    props.searchBar && 
                    <SearchBar>
                        <input type="text" placeholder='Pesquise' />
                        <button>{ <BsSearch /> }</button>
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
