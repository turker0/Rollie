import { Dimensions } from "react-native";

//https://stackoverflow.com/questions/49532028/how-to-make-font-size-responsive-in-react-native

const SCREEN_WIDTH = Dimensions.get("window").width; // get current width
const scale = 375; // constant, 375 is standard width of  iphone 6 / 7 / 8

const dynamicfontsize = (fontSize: number) => {
  const ratio = fontSize / scale; // get ratio based on your standard scale
  const newSize = Math.round(ratio * SCREEN_WIDTH);
  return newSize;
};

export default dynamicfontsize;
