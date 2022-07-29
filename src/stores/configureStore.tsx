
import { configureStore } from '@reduxjs/toolkit';

import logger from './middleware/logger';
import reducer from './reducers';

export default function () {
    return configureStore({
        reducer,
        middleware: [
            logger({
                destination: 'Console'
            })
        ]
    })
}