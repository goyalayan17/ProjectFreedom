import React from 'react';
import { Provider } from 'react-redux';
import { Registration } from 'src/domian/registrationForm';
import { store } from 'src/store';

export default { title: 'Components/RegistrationForm' }

export const RegistrationStory = (): React.ReactElement => (
    <>
        <Provider store={store()}>
            <Registration onChange={() => { }} registrationList={[]} ></Registration>
        </Provider>
    </>

);