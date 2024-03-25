import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImageUpload() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className=" flex items-center justify-center mt-2 shadow-lg shadow-black rounded-full">
      <Pressable
        className="bg-my_gray w-28 h-28 rounded-full"
        onPress={pickImage}
      >
        {image && (
          <Image className="w-28 h-28 rounded-full" source={{ uri: image }} />
        )}
      </Pressable>
    </View>
  );
}
