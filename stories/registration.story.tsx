import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRegistrationForm } from 'src/domian/registrationForm';
import { store } from 'src/store';

export default { title: 'Components/RegistrationForm' }

export const RegistrationStory = (): React.ReactElement => (
    <>
        <Provider store={store()}>
            <ConnectedRegistrationForm></ConnectedRegistrationForm>
        </Provider>
    </>

);