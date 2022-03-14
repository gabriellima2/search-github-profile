import { useState } from 'react';
import DataContext from './index';

export default function DataProvider({ children }) {
    const [ userData, setUserData ] = useState(null);
    const [ userRepos, setUserRepos ] = useState(null);
    const [ userFollowers, setUserFollowers ] = useState(null);
    const [ userFollowing, setUserFollowing ] = useState(null);

    return (
        <DataContext.Provider value={{
            userData,
            userRepos,
            userFollowers,
            userFollowing,
            setUserData,
            setUserRepos,
            setUserFollowers,
            setUserFollowing
        }}>
            {children}
        </DataContext.Provider>
    );
};
