'use strict';
import React, { View, Text, StyleSheet } from 'react-native';

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

module.exports = TabIcon;
