import React from 'react';
import { useEffect, useState } from 'react';

import Video from 'react-native-video';
import {
  View,
  Text,FlatList,
  TouchableOpacity,KeyboardAvoidingView ,
  StyleSheet,
  Pressable,
  ScrollView,Image,
  ImageBackground,  Keyboard,
  TextInput

} from 'react-native';
// import {  TextInput} from 'react-native-paper';
// import { TextInput } from 'react-native-material-ui';
const AddBills = ({ navigation }) => {
 
    const [isChecked, setChecked] = useState(false);
  
    const handleToggleCheckbox = () => {
      setChecked(!isChecked);
    };
  


    const [isKeyboardActive, setIsKeyboardActive] = useState(false);

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => setIsKeyboardActive(true),
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => setIsKeyboardActive(false),
      );
  
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);





    const [Quantity, setQuantity] = useState();
    const [Price, setPrice] = useState();
    const [Name, setName] = useState();
    const [ProductCode, setProductCode] = useState();
    const [productlist, setproductlist] = useState([]);
    const [edit,setEdit]=useState(null);

    const Add = () => {
     
        if (Quantity == null || Price== null ||  ProductCode == null || Name== null){
            
alert("Fill the details")
        }
    else {
        console.log('hll')
        const AddProduct = {
            key: Math.random().toString(),
            Quantity: Quantity,
            Price:Price,
            Name:Name,
            ProductCode:ProductCode,
        
        }
        setproductlist((oldList) => [...oldList, AddProduct])
        setQuantity('')
        setName('')
        setPrice('')
        setProductCode('')
     
    }
}
const sortedData = productlist.sort((a, b) => a - b);


  return (
    <View style={{ backgroundColor:'white', height:'100%', position:'absolute', width:'100%'}}>
        {/*Header*/}
    <View style={{  justifyContent:"space-between", flexDirection:'row' , alignItems:'center', marginTop:16,marginRight:10,marginBottom:'6%' ,}}>
     
      <Image source={require("../Images/mainlogo.png")} style={{height:20, width:130}}/>
      <View style={{backgroundColor: '#0f034b', width:40, height:40, borderRadius:30 , alignContent:'center', 
      marginLeft:50,justifyContent:"center", alignItems:'center'}}>

<Image source={require("../Images/drawer.png")} style={{height:'40%', width:'30%'}}/>
</View>
     
     
     
     
     
     
     
     
      </View>
{/* 
<ScrollView>





</ScrollView> */}




      
     
   
    </View>

  );
};

export default AddBills;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ff5400',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop:12,
    marginLeft:10,
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    height: 20,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 4,
    // marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  checked: {
    backgroundColor: 'white'},
  button: {
    // backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 40,
  },
});
