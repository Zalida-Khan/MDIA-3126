import { Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return<Text>This is the cake page 🎂</Text>;
}

import { View } from 'react-native';




export default function Page() {
  return (
    <View>
      <Link href="/about">About</Link>
      {/* ...other links */}
      <Link href="/user/bacon">View user</Link>
    </View>
  );
}
