import * as React from 'react';
import { StyleSheet, Text, View, Image, RefreshControl } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function FeedScreen({ navigation }) {

  function onItemPress(item) {
    navigation.navigate('Details', { item: item })
  }

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
      <FeedItem
        icon="https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png"
        label="Read the Expo documentation"
        username="user3201"
        category="Sports"
        type="Completed"
        onUserPress={() => alert('User press')}
        onItemPress={() => onItemPress({ title: 'Do 100 pushups', category: 'Sports', usersCount: '2.312' })}
      />

      <FeedItem
        icon="https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png"
        label="Read the React Navigation documentation"
        username="tictalic"
        category="NSFW"
        type="Completed"
        onUserPress={() => alert('User press')}
        onItemPress={() => onItemPress({ title: 'Do 100 pushups', category: 'Sports', usersCount: '2.312' })}
      />

      <FeedItem
        icon="https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png"
        label="Ask a question on the forums"
        username="user3201"
        category="Reading"
        type="Todo"
        onUserPress={() => alert('User press')}
        onItemPress={() => onItemPress({ title: 'Do 100 pushups', category: 'Sports', usersCount: '2.312' })}
        isLastOption
      />
    </ScrollView>
  );
}

function FeedItem({ icon, username, label, category, type, onUserPress, onItemPress, isLastOption }) {
  return (
    <View style={[styles.option, isLastOption && styles.lastOption]}>
      <View style={{ flexDirection: 'row' }}>
        <RectButton style={styles.optionIconContainer} onPress={onUserPress}>
          <Image 
            source={{ uri: icon }} 
            style={{width: 40, height: 40, borderRadius: 400/ 2}} 
          />
        </RectButton>
        <RectButton style={styles.optionTextContainer} onPress={onItemPress}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.optionText}>{label}</Text>
            <View style={styles.subContainer}>
              <Text style={styles.categoryText}>{category}</Text>
              <Text style={styles.usersText}> | </Text>
              <Text style={styles.usersText}>
                <Text style={{ fontWeight: 'bold', color: getTypeTextColor(type) }}>{type}</Text>
                <Text> by </Text>
                <Text style={{ fontWeight: 'bold' }}>{username}</Text>
              </Text>
            </View>
          </View>
        </RectButton>
      </View>
    </View>
  );
}

function getTypeTextColor(type) {
  switch(type) {
    case 'Todo': return '#f8d061';
    case 'Completed': return 'green';
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingTop: 10,
  },
  option: {
    backgroundColor: '#fdfdfd',
    padding: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionIconContainer: {
    width: 60,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  optionTextContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  optionText: {
    color: '#555',
    fontSize: 16,
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
