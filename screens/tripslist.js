import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import TripItem from '../components/tripitem';

class TripsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('https://api.gigacover.com/recruitment/challenge')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.trips,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }



    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={styles.list}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <TripItem onPress={() => this.props.navigation.navigate('TripDetails', item)} item={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    },
})

export default TripsList