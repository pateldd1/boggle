import React from 'react';
import { Provider } from 'react-redux';
import Boggle from './game/boggleContainer';

const Root = ({ store }) => (
    <Provider store={store}>
        <Boggle />
    </Provider>
);

export default Root;