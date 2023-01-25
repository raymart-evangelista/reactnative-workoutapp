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

    const styles = this.props.theme

    return (
      <View style={styles.container}>
        <View style={styles.dashboardContainer}>
          <Text style={styles.title}>{this.state.greeting}, Raymart.</Text>
          <Text style={styles.title}>Your programs</Text>
          {/* <Text style={styles.subtitle}>Recent Workouts</Text> */}
          {/* <Text style={styles.workoutData}>Workouts Completed: 5</Text>
          <Text style={styles.workoutData}>Total Distance: 10km</Text>
          <Text style={styles.workoutData}>Total Calories Burned: 500</Text> */}
        </View>

        <TouchableOpacity
          style={styles.startWorkoutButton}
          onPress={() => this.props.navigation.navigate('NewProgram')}
        >
          <Text style={styles.startWorkoutButtonText}>Create new program</Text>

        </TouchableOpacity>

        {/* <TouchableOpacity 
          style={styles.startWorkoutButton}
          onPress={() => this.props.navigation.navigate('NewWorkout')}
        >
            <Text style={styles.startWorkoutButtonText}>Start Workout</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
