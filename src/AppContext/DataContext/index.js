import { createContext } from 'react';

const DataContext = createContext({
    userData: {},
    setUserData: () => {},
    userRepos: [],
    setUserRepos: () => {},
    userFollowers: [],
    setUserFollowers: () => {},
    userFollowing: [],
    setUserFollowing: () => {}
});

export default DataContext;
