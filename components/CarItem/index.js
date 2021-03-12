import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import CustomButtons from '../StyledButton/index';
const CarItem=(props)=>{
  const {name, tagline, image,taglineCTA}=props.car;
    return (
    <View style={styles.carcontainer}>
        <ImageBackground source={image} style={styles.image} />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text styles={styles.subtitle}>
            {tagline}{' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButtons title='custom order' type='primary' onPress={()=>{console.warn('Custom Button was pressed')}} />
          <CustomButtons title='existing inventory' type='secondary' onPress={()=>{console.warn('Custom Button was pressed')}}/>
        </View>
      </View>
    )
}

export default CarItem;