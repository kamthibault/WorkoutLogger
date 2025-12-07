import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default function App() {
    const [workouts, setWorkouts] = useState([]);

    const addWorkout = (workout) => {
        setWorkouts((currentWorkouts) => [...currentWorkouts,workout]);
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home">
                    {(props) => <HomeScreen {...props}workouts={workouts} />}
                </Stack.Screen>
                <Stack.Screen name="Add Workout">
                    {(props) => <HomeScreen {...props} addWorkout={addWorkout} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
