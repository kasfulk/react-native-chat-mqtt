import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import type { UserListProps } from '../types/stacks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function UserListScreen({ navigation }: UserListProps) {
  const [username,setUsername] = React.useState('');

  const getUsername = async () =>{
    const storedUsername = await AsyncStorage.getItem('@Username');
    setUsername(storedUsername as string);
  }

  React.useEffect(() => {
    getUsername();
  })
    return (
      <View style={styles.container}>
        {username ? 
            <Text style={styles.title}>Hello {username}</Text> : null
        }
        <View style={styles.button}>
          <Button
            title="Go to Hosme"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
        <View style={styles.addButton}>
        <FontAwesomeIcon icon="comments" />
          <Button
              title="Add Contact"
              onPress={() => navigation.navigate('Home')}
            />
        </View>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  button: {
    marginTop: offset,
    marginLeft: offset,
  },
  addButton: {
    
    marginTop: offset,
    marginLeft: offset,
  }
});
