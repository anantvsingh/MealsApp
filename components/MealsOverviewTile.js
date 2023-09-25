import { View,Text, StyleSheet,Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealsOverviewTile({id,title,imageURI}){
    const navigation=useNavigation();

    function slectMealHandler(){
        navigation.navigate('MealDetails',{
            mealID:id
        });
    }
    
    return (<View style={styles.container}>
        <Pressable android_ripple={"#c1b3b3"} style={({pressed})=>[styles.button,
            pressed ? styles.buttonPressed :null]} onPress={slectMealHandler}>
        <Image source={{uri:imageURI}} style={styles.image}/>
        
        <Text style={styles.title}>{title}</Text>
        </Pressable>
       
    </View>);
}
export default MealsOverviewTile;

const styles=StyleSheet.create({
    
    image:{
        width:380,
        height:300,
        borderRadius:20
        
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        color:"#fff6f6"
        
    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:0.5
    },
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        marrgin:16,
        padding:16,
        
    }
})