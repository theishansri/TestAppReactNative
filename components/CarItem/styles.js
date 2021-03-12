import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
      },
      carcontainer:{
        width:'100%',
        height:Dimensions.get('window').height
      },
      titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center',
      },
      buttonContainer:{
        position:'absolute',
        bottom:50,
        width:'100%'
      },
      title:{
        fontSize:40,
        fontWeight:'500',
      },
      subtitle:{
        fontSize:16,
        color:'#5c5e62'
      },
      subtitleCTA:{
        textDecorationLine:'underline'
      }
})

export default styles;