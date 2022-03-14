import {
    UserInformationContainer,
    Title,
    UserContainer,
    Users,
    ProfilePhoto,
    UserData
} from './styles';

import GoBackButton from '../GoBackButton';

import Test from '../../public/img/lobo1.jpg';

export default function UserInformation(props) {
    return (
        <UserInformationContainer>
            <GoBackButton />
            <Title>{ props.title } de Gabriel</Title>
            <UserContainer>
                <ul>
                    <Users>
                        <ProfilePhoto src={Test} alt='gabriellima2' />
                        <UserData>
                            <p>gabriellima2</p>
                            <a href="#">Visitar Perfil!</a>
                        </UserData>
                    </Users>
                </ul>
            </UserContainer>
        </UserInformationContainer>
    );
};
