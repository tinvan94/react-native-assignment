import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TripDetail({ navigation }) {
    return (
        <View style={styles.content}>
            <Text>Trip ID: { navigation.getParam('trip_id')}</Text>
            <Text>Duration: { navigation.getParam('duration')}</Text>
            <Text>Distance: { navigation.getParam('distance')}</Text>
            <Text>Start Time: { navigation.getParam('start_time')}</Text>
            <Text>End Time: { navigation.getParam('end_time')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 40,
    },
})
