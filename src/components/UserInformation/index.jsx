import {
    UserInformationContainer,
    Title,
    UserContainer,
    Users,
    ProfilePhoto,
    UserData
} from './styles';

import GoBackButton from '../GoBackButton';

export default function UserInformation(props) {
    return (
        <UserInformationContainer>
            <GoBackButton />
            <Title>{ props.title } de USERNAME</Title>
            <UserContainer>
                <ul>
                    <Users>
                        <ProfilePhoto src='' alt='FOTO' />
                        <UserData>
                            <p>USERNAME</p>
                            <a href="#">Visitar Perfil!</a>
                        </UserData>
                    </Users>
                </ul>
            </UserContainer>
        </UserInformationContainer>
    );
};
