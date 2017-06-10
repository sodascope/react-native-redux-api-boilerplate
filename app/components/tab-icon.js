'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TabIcon extends Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

module.exports = TabIcon;
