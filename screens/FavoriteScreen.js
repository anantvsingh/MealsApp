import { View,Text } from "react-native";
import MealList from "../components/MealList";
import { useContext } from "react";
import { FavContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";

function FavoriteScreen(){
    const fav=useContext(FavContext);
    const favitem=MEALS.filter((meal)=>
    fav.ids.includes(meal.id));
    return (
        <MealList item={favitem}/>
    )
}
export default FavoriteScreen;