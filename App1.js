import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import logo from './assets/icon.png';
import * as ImagePicker from 'expo-image-picker';
import Search from './Component/Home';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

   let openImagePickerAsync = async () => {
   let permissionResult = await
   ImagePicker.requestMediaLibraryPermissionsAsync();
   if (permissionResult.granted === false) {
   alert("Permission to access camera roll is required!");
   return;
   }
   let pickerResult = await ImagePicker.launchImageLibraryAsync();
     if (pickerResult.cancelled === true) {
    return;
     }
     setSelectedImage({ localUri: pickerResult.uri });
     };

      let openShareDialogAsync = async () => {
     if (!(await Sharing.isAvailableAsync())) {
     alert(`Sharing is not available on your platform`);
     return;
     }
     await Sharing.shareAsync(selectedImage.localUri);
   };

    if (selectedImage !== null) {

    return (
      <View style={styles.container}>
        <Image
        source={{ uri: selectedImage.localUri }}
        style={styles.thumbnail}
        />
      </View>
      );
      }
    return (

    <View style={styles.container}>
          <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
          style={styles.logo}/>
          <Text>Open up App.js to start working on my app!</Text>


          <StatusBar style="auto" />

      <TouchableOpacity onPress={openImagePickerAsync}
          style={styles.button}>
         <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>

    </View>

      <Search/>
  

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
 logo: {
   width: 305,
   height: 200,
   marginBottom: 10,

},

 button: {
  backgroundColor: "green",
  padding: 20,
  borderRadius: 30,
  height: 70,
  width: 200,
  marginTop: 10,
  padding: 10
  },
  buttonText: {
  fontSize: 20,
  color: '#fff',
  },

  thumbnail: {
 width: 300,
 height: 300,
 resizeMode: "contain"
 }



});
