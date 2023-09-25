import { StyleSheet,View,Text, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsOverviewTile from "../components/MealsOverviewTile";
import { useLayoutEffect } from "react";


function MealsOverviewScreen({route,navigation}){
    const catID=route.params.categoryID;

    const displayMeals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catID)>=0;
    })

    useLayoutEffect(()=>{
        const categoryTitle=CATEGORIES.find((categgory)=>
        categgory.id===catID).title;

        navigation.setOptions({
            title:categoryTitle
        })
    },[catID,navigation])

    function renderOverviewItem(itemData){
        
        const item=itemData.item;
        
        const mealProps={
            id:item.id,
            title:item.title,
            imageURI:item.imageUrl,
            
        };
        return (
            <MealsOverviewTile {...mealProps}/>
        )
    }
    return (<View style={styles.container}>
        
        <FlatList data={displayMeals} keyExtractor={(item)=>item.id} renderItem={renderOverviewItem}/>
        </View>);
}

export default MealsOverviewScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        fontSize:18
    }
})