import Wrapper from '../components/Wrapper';
import UserInformation from '../components/UserInformation';

import { useContext } from 'react';
import DataContext from '../AppContext/DataContext';

export default function Followers() {
    const dataCTX = useContext(DataContext);

    return (
        <Wrapper>
            <UserInformation title='Seguidores' data={dataCTX.userFollowers}/>
        </Wrapper>
    );
};
