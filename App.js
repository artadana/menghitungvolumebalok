import React, { Component } from 'react';
import {
  AppRegistry,
  //StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungLuasSegitiga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      tinggi: 0,
      volume: 0,
      lebar: 0,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>

        <View style={{ backgroundColor: '#800000' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }} >
           {'\n'}
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd' }}>
            <TextInput
                style={{ height: 40 }}
              placeholder="Masukkan Panjang Balok "
              onChangeText={(panjang) => this.setState({ panjang })}
            />
            <TextInput
                  style={{ height: 40 }}
              placeholder="Masukkan Lebar Balok"
              onChangeText={(lebar) => this.setState({ lebar })}
            />
            <TextInput
                style={{ height: 40 }}
              placeholder="Masukkan Tinggi Balok"
              onChangeText={(tinggi) => this.setState({ tinggi })}
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.panjang * this.state.panjang * this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#FF7F00' }}>
          <Text
              style={{ padding: 10, fontSize: 20 }} >
              Panjang = { this.state.panjang} {'\n'}{'\n'}
              Lebar = { this.state.lebar} {'\n'}{'\n'}
              Tinggi = { this.state.tinggi} {'\n'}{'\n'}
              Volume = {this.state.volume}
          </Text>
         </View>

   </View>

    );
  }
}

AppRegistry.registerComponent('AppForm2', () => HitungLuasSegitiga);
