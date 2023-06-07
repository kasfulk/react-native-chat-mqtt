import * as React from 'react';
import { StyleSheet, Button, View, TextInput, Text } from 'react-native';
import type { IndexProps } from '../types/stacks';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }: IndexProps) {
  const [username,setUsername] = React.useState('')
  const handleButton = async () => {
    try {
      if(!username) return;
      await AsyncStorage.setItem(
        '@Username',
        username,
      );
      navigation.navigate('UserList');
    } catch (error) {
      console.log(error);
    }
  }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter your username:</Text>
        <TextInput 
            placeholder="Username"
            style={styles.nameInput}
            onChangeText={setUsername}
            value={username} />
        <Button
          title="Set username"
          onPress={handleButton}
        />
      </View>
    );
  }

const offset = 18;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,
    margin: offset,
    width: 200,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    padding: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
