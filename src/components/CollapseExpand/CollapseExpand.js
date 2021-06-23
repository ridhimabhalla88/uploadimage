import * as React from "react";
import { Image, Text, TouchableOpacity, View ,StyleSheet} from "react-native";
import Colors from "../../utils/Colors";
import Images from "../../utils/Images";


interface Props {
    label: string;
    Views: View;
    marginHori: int;
    top: int;
    marginTop:int;
    label2:string
}

class CollapseExpand extends React.Component<Props> {
    constructor() {
        super();
        this.state = {
            isModalVisible: false,
        };
       
    }
    toggleModal = () => {

        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        const { label, Views, marginHori, top,marginTop,minHeight,label2 } = this.props;
        
        return (
            <View style={[{ marginHorizontal: marginHori, paddingTop: top,paddingHorizontal:10,marginTop:marginTop,minHeight:minHeight, borderRadius:5 },styles.elevationStyle]}>

                <TouchableOpacity style={{justifyContent:'space-between' }} onPress={this.toggleModal} >
                    <View style={{justifyContent:'space-between',flex:1, width:'100%', flexDirection: 'row' }}>
                        <Text style={[{ fontSize: 16, color: 'white' }, this.props.style]}>{label}</Text>
                        {this.arrow(this.state.isModalVisible)}
                    </View>

                   {label2!=undefined&&!label2!=null&& <View style={{justifyContent:'space-between',flex:1, width:'100%', flexDirection: 'row' }}>
                        <Text numberOfLines={!this.state.isModalVisible? 2:null} style={[{ fontSize: 16, color: 'white' ,}, this.props.style2]}>{label2}</Text>
                    </View>}
                </TouchableOpacity>
                {this.vis(this.state.isModalVisible, Views)}
            </View>


        );
    }
    vis = (val, Views) => {
      
        if (val) {
            return (
                Views
            )
        } else {
            return null;
        }
    }
    arrow = (val) => {
        if (val) {
            return (
                <Image
                style={{ width: 18, height: 8, marginLeft: 20 ,alignSelf:'center',tintColor:Colors.PrimaryColor,transform: [{rotateX: '180deg'}]}}
                resizeMode='contain'
                    source={Images.arrowdown}
                />
            )
        } else {
            return (
            <Image
                style={{ width: 18, height: 8, marginLeft: 20 ,alignSelf:'center',tintColor:Colors.PrimaryColor}}
                resizeMode='contain'
                source={Images.arrowdown}
            />
            )
        }
    }
}
const styles = StyleSheet.create({
    elevationStyle: {
        shadowColor: "#000",
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
      },
    FlatListStyle: {
      marginTop: 20,
      borderRadius: 2,
      overflow: "hidden",
      margin: 15,
      shadowColor: "#000",
      backgroundColor: "white",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
      elevation: 5,
    },
  });
export default CollapseExpand;