import Home from './pages/home';
import Repos from './pages/repos';
import Followers from './pages/followers';
import Following from './pages/following';

import { 
    BrowserRouter as Router,
    Route,
    Routes 
} from 'react-router-dom';

import ThemeContextProvider from './AppContext/ThemeContext/Provider';
import DataProvider from './AppContext/DataContext/Provider';

export default function AppRoutes() {
    return (
        <ThemeContextProvider>
            <DataProvider>
                <Router>
                        <Routes>
                            <Route path='/' exact element={ <Home /> } />
                            <Route path='/repos' element={ <Repos /> }/>
                            <Route path='/followers' element={ <Followers /> } />
                            <Route path='/following' element={ <Following /> } />
                        </Routes>
                </Router>
            </DataProvider>
        </ThemeContextProvider>
    );
};
