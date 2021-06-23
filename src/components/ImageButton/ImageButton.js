import * as React from "react";
import { Image, TouchableOpacity,View} from "react-native";
import Colors from "../../utils/Colors.js";

interface Props {
    uri: {};
    onPress: () => void;
    mainStyle:{};
    iconStyle:{}
}

class ImageButton extends React.Component<Props> {
    render() {
        const {onPress, mainStyle,iconStyle,uri} = this.props;
        return (
           
            <TouchableOpacity onPress={onPress} 
            style={mainStyle}>
          <Image
                resizeMode='contain'
                style={iconStyle}
                source={uri}
              />
          </TouchableOpacity>

        );
    }
}

;

export default ImageButton;