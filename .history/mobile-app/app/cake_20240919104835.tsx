import { Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
    <Text>This is the cake page 🎂</Text>;
  <Link href="/pizza">Take me to the pizza page, please</Link>
)
}


