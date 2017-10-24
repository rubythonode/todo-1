import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Header, CategoryList, KeyboardHandleView } from '../components';
import { Constants } from '../configs';

class MyList extends Component {
    render() {
        return (
            <View
                style={styles.containers}
            >
                <Header title={'My Lists'} />
                <CategoryList />
                <KeyboardHandleView hasTab />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containers: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
});

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
