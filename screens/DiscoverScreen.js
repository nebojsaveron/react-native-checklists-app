import * as React from 'react';
import { StyleSheet, Text, View, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function DiscoverScreen({ navigation }) {

  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <Checklist
        label="Do 100 pushups"
        category="Sports"
        usersCount="2.312"
        onAddPress={() => alert('Add')}
        onItemPress={() => navigation.navigate('Details', { item: { title: 'Do 100 pushups', category: 'Sports', usersCount: '2.312' } })}
      />

      <Checklist
        label="Have sex in the bathroom"
        category="NSFW"
        usersCount="22.052"
        onAddPress={() => alert('Add')}
        onItemPress={() => navigation.navigate('Details', { item: { title: 'Have sex in the bathroom', category: 'NSFW', usersCount: '22.052' } })}
      />

      <Checklist
        label="Upper body workout"
        category="Sports"
        usersCount="312"
        onAddPress={() => alert('Add')}
        onItemPress={() => navigation.navigate('Details', { item: { title: 'Upper body workout', category: 'Sports', usersCount: '312' } })}
        isLastOption
      />
    </ScrollView>
  );
}

function Checklist({ label, category, usersCount, onAddPress, onItemPress, isLastOption }) {
  return (
    <View style={[styles.option, isLastOption && styles.lastOption]}>
      <View style={{ flexDirection: 'row' }}>
        <RectButton style={styles.iconContainer} onPress={onAddPress}>
          <Ionicons name='md-add-circle-outline' size={35} color="rgba(0,0,0,0.4)" />
        </RectButton>
        <RectButton style={styles.itemContainer} onPress={onItemPress}>
          <Text style={styles.optionText}>{label}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.categoryText}>{category}</Text>
            <Text style={styles.usersText}> | </Text>
            <Text style={styles.usersText}>{usersCount} users</Text>
          </View>
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 10,
  },
  option: {
    backgroundColor: '#fdfdfd',
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  iconContainer: {
    width: 65,
    paddingLeft: 18,
    backgroundColor: '#f8d061',
    justifyContent: 'center'
  },
  itemContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'column'
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 17,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  subContainer: {
    paddingTop: 5,
    flexDirection: 'row'
  },
  categoryText: {
    color: '#919191',
    fontWeight: 'bold',
    fontSize: 13
  },
  usersText: {
    color: '#919191',
    fontSize: 13
  }
});