import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  UserList: undefined;
  Chat: { userId: string};
};

export type IndexProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type UserListProps = NativeStackScreenProps<RootStackParamList, 'UserList'>;