import {
    UserInformationContainer,
    Title,
    UserContainer,
    Users,
    ProfilePhoto,
    UserData
} from './styles';

import { BsGithub } from 'react-icons/bs';

import GoBackButton from '../GoBackButton';

import { useContext } from 'react';
import DataContext from '../../AppContext/DataContext';

export default function UserInformation({ title, data }) {
    const dataCTX = useContext(DataContext);

    if ( !data ) return null;

    return (
        <UserInformationContainer>
            <GoBackButton />
            <Title>{ title } de { dataCTX.userData.login }</Title>
            <UserContainer>
                <ul>
                    {
                        data.map( information => (
                            <Users key={information.id}>
                                <ProfilePhoto
                                    src={information.avatar_url}
                                    alt={information.login}
                                />
                                <UserData>
                                    <p>{ information.login }</p>
                                    <a 
                                        href={information.html_url} 
                                        target='_blank'>
                                        Visitar Perfil! {<BsGithub />}
                                    </a>
                                </UserData>
                            </Users>
                        ))
                    }
                </ul>
            </UserContainer>
        </UserInformationContainer>
    );
};
