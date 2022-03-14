import Wrapper from '../components/Wrapper';
import UserInformation from '../components/UserInformation';
import { useContext } from 'react';
import DataContext from '../AppContext/DataContext';

export default function Following() {
    const dataCTX = useContext(DataContext);
    
    return (
        <Wrapper>
            <UserInformation title='Seguindo' data={dataCTX.userFollowing}/>
        </Wrapper>
    );
};
