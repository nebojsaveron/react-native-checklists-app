import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

export default function CreateScreen({ navigation, route }) {

  function onSavePress() {
    alert('Save');
    navigation.navigate('Discover');
  }

  navigation.setOptions({ 
    headerTitle: 'Create',
    headerRight: () => (
      <Button onPress={() => onSavePress()} title="Save" />
    ),
    headerRightContainerStyle: { marginRight: 10 }
  });

  let data = [{
    label: 'Banana',
    value: 'banana',
  }, {
    label: 'Mango',
    value: 'mango',
  }, {
    label: 'Pear',
    value: 'pear',
  }];

  const placeholder = {
    label: 'Select a category...',
    value: null,
    color: '#9EA0A4',
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.form}>
        <View style={styles.formItem}>
          <Text style={styles.inputLabel}>Title:</Text>
          <TextInput
            style={styles.textarea}
            onChangeText={(text) => console.log(text)}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.inputLabel}>Category:</Text>
          <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={data}
                style={pickerSelectStyles}
                placeholder={placeholder}
            />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.inputLabel}>Description (optional):</Text>
          <TextInput
            style={styles.textarea}
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => console.log(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  contentContainer: {
    flex: 1
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  formItem: {
    paddingTop: 20,
    paddingBottom: 10
  },
  inputLabel: {
    color: '#555',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  textarea: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 5
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
