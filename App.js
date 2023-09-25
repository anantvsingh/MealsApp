import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScrren';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesContextProvider from './store/context/favourites-context';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack=createNativeStackNavigator();
// const Drawer=createDrawerNavigator();
export default function App () {

  
  

  return  (
    <FavoritesContextProvider>
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:"#1d0303"},
        headerTintColor:"#7f6f6f",
        contentStyle:{backgroundColor:"#2d1d1d"},
        statusBarColor:"black"
      }}>
     
      
        <Stack.Screen name="MainScreen" component={CategoriesScreen} options={{
          title:'All categories'
        }}/>
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailsScreen}/>
      </Stack.Navigator>
      
      
     </NavigationContainer>
     </FavoritesContextProvider>);
  };

const styles = StyleSheet.create({
  container:{
    backgroundColor:"black"
  }
});