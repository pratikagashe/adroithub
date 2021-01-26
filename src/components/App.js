import React from 'react'
import AppRoutes from './routes'
import {Provider} from '../utils/ColorContext'

const App = () => {
    return (
        <Provider>
            <AppRoutes />
        </Provider>
    )
}

export default App