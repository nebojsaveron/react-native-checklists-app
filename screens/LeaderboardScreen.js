import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LeaderboardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <LeaderboardUser
        index="1"
        username="user3201"
        karma="2.321"
      />
      <LeaderboardUser
        index="2"
        username="tictalic"
        karma="1.021"
      />
      <LeaderboardUser
        index="3"
        username="Yolo"
        karma="361"
        isLastOption
      />
      <LeaderboardUser
        index="4"
        username="FitnessTrainer"
        karma="30"
        isLastOption
      />
    </ScrollView>
  );
}

function LeaderboardUser({ index, username, karma, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>{getRankText(index)}</Text>
        </View>
        <View style={styles.usernameContainer}>
          <Text style={styles.usernameText}>{username}</Text>
        </View>
        <View style={styles.karmaContainer}>
          <Text style={styles.karmaText}>{karma}</Text>
        </View>
      </View>
    </RectButton>
  );
}

function getRankText(index) {
  if (index == "1") {
    return "🥇"
  } else if (index == "2") {
    return "🥈"
  } else if (index == "3") {
    return "🥉"
  } else {
    return index;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rankContainer: {
    width: 70,
    paddingHorizontal: 20
  },
  usernameContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  karmaContainer: {
    width: 80,
    paddingHorizontal: 20
  },
  rankText: {
    textAlign: 'center',
    fontSize: 22
  },
  usernameText: {
    fontSize: 16,
    lineHeight: 24
  },
  karmaText: {
    textAlign: 'right',
    fontSize: 16,
    lineHeight: 24
  }
});
