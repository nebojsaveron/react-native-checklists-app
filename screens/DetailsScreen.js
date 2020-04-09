import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetailsScreen({ navigation, route }) {
  const { item } = route.params;

  navigation.setOptions({ headerTitle: item.title });

  const checked = true;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.topContentContainer}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.topContainer}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.valueText}>{item.category}</Text>
              <Text style={styles.labelText}>category</Text>
            </View>
          </View>
          <View style={styles.topContainer}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.valueText}>30 min</Text>
              <Text style={styles.labelText}>duration</Text>
            </View>
          </View>
          <View style={styles.topContainer}>          
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.valueText}>{item.usersCount}</Text>
              <Text style={styles.labelText}>users</Text>
            </View>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.labelText}>
            Created by <Text style={styles.userText}>Created by</Text>
          </Text>
          <Text style={{ marginTop: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>
      </View>
      <View style={styles.itemsContainer}>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    padding: 25
  },
  topContentContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  valueText: {
    fontSize: 24
  },
  labelText: {
    fontSize: 14,
    marginTop: 5,
    color: '#666666'
  },
  userText: {
    color: '#666666',
    fontWeight: 'bold',
  },
  descriptionContainer: { 
    flex: 1, 
    flexDirection: 'column', 
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 15
  },
  itemsContainer: {
    flex: 1,
    padding: 25,
    fontSize: 14
  }
});
