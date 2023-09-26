import { FlatList, View,Text,Image, StyleSheet, ScrollView,Pressable } from "react-native";
import { MEALS } from "../data/dummy-data";

import { useContext, useLayoutEffect, useState } from "react";
import IconButtons from "../components/IconButtons";
import { useDispatch, useSelector } from "react-redux";
import {FavContext} from '../store/context/favourites-context'
import { addFavorite,removeFavorite } from "../store/redux/favorite";


function MealDetailsScreen({route,navigation}){
    // const favMealCtx=useContext(FavContext);
    const favMealIds=useSelector(state=>state.fav.ids);
    const dispatch=useDispatch();

    const mealid=route.params.mealID

    const Mealid=MEALS.find((meal)=>meal.id===mealid);

    const mealIsFav=favMealIds.includes(mealid);    
    function onPressHandler() {
        console.log("pressed");
        if(mealIsFav){
            // favMealCtx.removeFavorite(mealid);
            dispatch(removeFavorite({id:mealid}));
        }
        else{
            // favMealCtx.addFavorite(mealid);
            dispatch(addFavorite({id:mealid}));
        }
        
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return (
                    <IconButtons 
                    icon={mealIsFav ? 'star':'star-outline'} 
                    size={30} 
                    color={"white"} 
                    onPress={onPressHandler}/>
                );
            }
        })
    },[navigation,onPressHandler]);
    
    return(
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>{Mealid.title}</Text>
        
        <Image style={styles.imgContainer}source={{uri:Mealid.imageUrl}}/>
        <View style={styles.divider}>
        <Text style={styles.subtitle}>Ingredients</Text>
        </View>
        
        <View >
        {Mealid.ingredients.map((ingredients)=>(
            <Text style={styles.list} key={ingredients}>{ingredients}</Text>
        ))}
        </View>
        
        <Text style={styles.subtitle}>Steps</Text>
        {Mealid.steps.map((steps)=>(
        <Text style={styles.list} key={steps}>{steps}</Text>))}
        </View>
        </ScrollView>
    );
}
export default MealDetailsScreen;

const styles=StyleSheet.create({
    imgContainer:{
        width:"80%",
        height:250,
    },
    title:{
        fontSize:25,
        fontWeight:"bold",
        color:"white",
        padding:8,
        margin:6
        
    },
    container:{
        alignItems:"center",
        justifyContent:"center"
    },
    subtitle:{
        color:"white",
        fontSize:18,
        fontWeight:"bold",
        padding:8,
        borderBottomWidth:2,
        borderColor:"white",
        
    },
    
    list:{
        backgroundColor:"#e0d4d4",
        margin:8,
        padding:8,
        borderRadius:20,
        fontWeight:"bold",
        color:"black"
    }
})