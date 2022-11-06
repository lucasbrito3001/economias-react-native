import { NavigationContainer } from "@react-navigation/native"

import { AppRoutes } from './app.routes.js'

export function Routes() {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}