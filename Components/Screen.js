import React, {useState} from "react";
import { Text, View, StyleSheet,TextInput , Keyboard,TouchableWithoutFeedback} from "react-native";
import Button from "./Button";
import Card from "./Card";



const Screen = () => {
    

  const [num, setNum] = useState('');

   const getPressedButtonValue = (number) => {
       setNum(...num,number);
    
   };

   const clearInputHandler = ()=>{
       setNum('');
   };
  return (
    <Card>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()} >
              <TextInput editable='false' value={num}  style={styles.input}/>
       </TouchableWithoutFeedback>
      <Button  getPressedButtonValue={getPressedButtonValue} clearInput={clearInputHandler}/>
    </Card>
  );
};

const styles = StyleSheet.create({
    input:{
        height: 50,
        width:'80%',
        borderColor: 'black',
        borderWidth: 1 ,
        marginVertical:50,
        textAlign:'right',
        fontSize:25,
        padding:5,

    }
    
});

export default Screen;
