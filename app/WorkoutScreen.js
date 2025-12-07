import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddWorkoutScreen ({ navigation, addWorkout }) {
    const [name,setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = () => {
        if (!name || !reps || !weight) {
            alert('Please fill in all fields');
            return;
        }
        addWorkout({ name, reps: Number(reps), weight: Number(weight) });
        navigation.goBack();
    };

    return (
        <View style={StyleSheet.container}>
            <Text style={styles.label}> Exercise Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder='Ex. Bench Press'
                />
                <Text style={styles.label}>Reps:</Text>
                <TextInput
                style={styles.input}
                value={reps}
                onChangeText = {setWeight}
                keyboardType='numeric'
                placeholder='Ex. 20'
                />
                <Button title= "Add Workout" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
});