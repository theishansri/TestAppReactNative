import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import Cars from './cars';
import CarItem from '../CarItem/index';
const CarList = () =>{
    return(
        <View style={styles.container}>
            <FlatList data={Cars} snapToAlignment={'start'} showsVerticalScrollIndicator={false} decelerationRate={'fast'} snapToInterval={Dimensions.get('window').height} keyExtractor={(item) => item.name} renderItem={
                ({item})=><CarItem car={item} />
            }/>
        </View>
    )
}

export default CarList;