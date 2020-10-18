import React from 'react';
import { StyleSheet, Text, View ,TextInput,
    TouchableOpacity, Alert,Modal,KeyboardAvoidingView,
ScrollView,FlatList} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../component/MyHeader';

export default class SubjectScreen extends React.Component{
    constructor(){
        super()
        this.state={
            subject:'',
            assingments:''
        }
    }

    render(){
        return(
            <View>
                <MyHeader title = ' subjects and assingments'/>
            </View>
        )
    }
}