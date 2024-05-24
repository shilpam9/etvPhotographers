import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Iconss from 'react-native-vector-icons/Feather';
import Iconsss from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={{backgroundColor: '#000000', width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '5%',
        }}>
        <TouchableOpacity>
          <Iconss name="menu" size={25} color="#FFFDDE" />
        </TouchableOpacity>
        <View style={styles.circle}>
          <Image
            source={require('../Assets/Images/ETVnewLogo.png')}
            style={styles.logo}
          />
        </View>
        <TouchableOpacity>
          <Iconsss
            name="notifications-circle-outline"
            size={35}
            color="#FFFDDE"
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: '#FFFFFF',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Dashboard
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    circle: {
        width: 90,
        height: 90,
        borderRadius: 100 / 2,
        backgroundColor: '#FFFEF2',
        // left: '0%',
        marginTop: '10%',
      },
      logo: {
        width: '65%',
        height: '65%',
        // height:100
        left: '22%',
        top:"18%",
        opacity: 0.9,
      },
})