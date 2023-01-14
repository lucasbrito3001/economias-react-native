import { View, Text, StyleSheet } from 'react-native'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Screen, Navigator } = createNativeStackNavigator();

// Screens
import { Home, Login, Register, Dashboard } from "../views/index.js"

function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Login navigation={navigation}></Login>
        </View>
    )
}

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Home navigation={navigation}></Home>
        </View>
    );
}

function DashboardScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Dashboard navigation={navigation}></Dashboard>
        </View>
    );
}

function RegisterScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Register navigation={navigation}></Register>
        </View>
    )
}

export function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name="Home"
                component={HomeScreen}
                options={{ header: () => null }}
            />
            <Screen
                name="Login"
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Screen
                name="Register"
                component={RegisterScreen}
                options={{ header: () => null }}
            />
            <Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{ header: () => null }}
            />
        </Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
