import DataContext from './index';

export default function DataProvider(props) {
    return (
        <DataContext.Provider>
            {props.children}
        </DataContext.Provider>
    );
};
