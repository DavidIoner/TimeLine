import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-800">
      <Text className='text-5xl font-bold text-gray-50'>Novo App</Text>
      <Text className='text-2xl font-bold text-center text-gray-50'>aqui começo uma nova jornada!</Text>
      <StatusBar style="auto" translucent />
    </View>
  );
}


