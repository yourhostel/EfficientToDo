import React from 'react';
import Search from './components/search/Search';
import styles from './App.module.scss'

const App = () => {
    return (
        <div className={styles.Wrapper}>
            <Search/>
            <h2>Hello, EfficientToDo!</h2>
        </div>
    );
};

export default App;