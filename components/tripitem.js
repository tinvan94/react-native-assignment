import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function TripItem({item, onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>

                <Text style={styles.itemText}>{item.trip_id}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
    },
    list: {
        marginTop: 20,
    },
})
