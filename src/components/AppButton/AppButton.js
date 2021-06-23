import * as React from "react";
import {StyleSheet, Text, TouchableOpacity,View} from "react-native";
import Colors from "../../utils/Colors.js";

interface Props {
    label: string;
    onPress: () => void;
    height: int;
    fontWeight:string;
    fontFamily:string
}

class AppButton extends React.Component<Props> {
    render() {
        const {label, onPress, height, width, s,top,radius,fontSize,fontWeight,fontFamily} = this.props;
        return (
           
            <TouchableOpacity onPress={onPress} 
            style={[ { justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:top,
             height: height, backgroundColor: Colors.PrimaryColor ,borderRadius:radius,
             paddingHorizontal:14, width:width},s]}>
              <Text numberOfLines={1} style={{ color: 'white' ,  fontSize: fontSize, fontWeight: fontWeight==null?'bold':fontWeight}}>{label}</Text>
          </TouchableOpacity>

        );
    }
}

;

export default AppButton;