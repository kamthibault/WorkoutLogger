import { Button, FlatList, StyleSheet, View } from 'react-native';

export default function HomeScreen({ navigaition, workouts }) {
    return (
        <View style={StyleSheet.container}>
            <FlatList
                data={workouts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>(
                    <View style={styles.item}>
                        <Text style = {styles.title}>{item.name}</Text>
                        <Text>Reps: {item.reps}</Text>
                        <Text>Weight: {item.weight} lbs</Text>
            </View>
        )}
        />
        <Button title="Add Workout" onPress={() => navigaition.navigate('AddWorkout')} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});