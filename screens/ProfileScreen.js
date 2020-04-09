import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>      
      <View style={{ flexDirection: 'column' }}>        
        <View style={styles.topContainer}>
          <View style={styles.profilePictureContainer}>
              <Image 
                source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}} 
                style={{width: 70, height: 70, borderRadius: 400/ 2}} 
              />
          </View>
          <View style={styles.userDetailsContainer}>
            <View>
              <Text style={styles.usernameText}>user3201</Text>
            </View>
            <View style={styles.userData}>
              <View style={styles.dataContainer}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <Text style={styles.valueText}>100</Text>
                  <Text style={styles.labelText}>followers</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <Text style={styles.valueText}>243</Text>
                  <Text style={styles.labelText}>following</Text>
                </View>
              </View>
              <View style={styles.dataContainer}>          
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <Text style={styles.valueText}>143</Text>
                  <Text style={styles.labelText}>karma</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  profilePictureContainer: {
    paddingVertical: 15,
    paddingHorizontal: 25
  },
  userDetailsContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  usernameText: {
    fontSize: 18
  },
  userData: { 
    flex: 1, 
    flexDirection: 'row' 
  },
  dataContainer: {
    paddingTop: 10,
    paddingRight: 20
  },
  valueText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
