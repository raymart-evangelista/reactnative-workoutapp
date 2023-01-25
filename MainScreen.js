import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class MainScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: ''
    }
  }

  componentDidMount() {
    let currentHour = new Date().getHours()
    if (currentHour < 12) {
      this.setState({ greeting: 'Good morning' })
    } else if (currentHour < 18) {
      this.setState({ greeting: 'Good afternoon' })
    } else {
      this.setState({ greeting: 'Good evening' })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dashboardContainer}>
          <Text style={styles.title}>{this.state.greeting}, Raymart.</Text>
          <Text style={styles.subtitle}>Recent Workouts</Text>
          <Text style={styles.workoutData}>Workouts Completed: 5</Text>
          <Text style={styles.workoutData}>Total Distance: 10km</Text>
          <Text style={styles.workoutData}>Total Calories Burned: 500</Text>
        </View>

        <TouchableOpacity 
            style={styles.startWorkoutButton}
            onPress={() => this.props.navigation.navigate('NewWorkout')}
        >
            <Text style={styles.startWorkoutButtonText}>Start Workout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  workoutData: {
    fontSize: 14,
    marginBottom: 10,
  },
  startWorkoutButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  startWorkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
