import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Lists from './src/components/List/Lists';

export default class App extends React.Component {

  state = {
    places: [],
    placesName: 'บ้าน',
    placeholderText: 'กรุณากรอกตำแหน่งที่อยู่'
  }

onButtonPress = (e) =>{
  console.log(e)
};

updateTextbox = (mum) => {
  this.setState({
    placesName:mum
  })
}

  render() {
    return (
      <View style={styles.container}>
        <Lists places={this.state.places}/>
        <Text style={{fontSize:50}}>{this.state.placesName}</Text>
        <TextInput
        placeholder={this.state.placeholderText}
        style={styles.TextInput}
        onChangeText={this.updateTextbox}
        />
        <Button title="PRESS Me" onPress={this.onButtonPress}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ACD32',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    borderWidth: 2,
    borderColor: 'white',
    width: '100%',
    textAlign: 'center'
  },
});
