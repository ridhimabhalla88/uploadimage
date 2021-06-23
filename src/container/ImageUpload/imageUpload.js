import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
  Alert,
  KeyboardAvoidingView,
  Linking,
} from 'react-native';

import Activity from '../../components/ActivityIndicator';
import Images from '../../utils/Images';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import AppButton from '../../components/AppButton/AppButton';
import ImagePicker from 'react-native-image-crop-picker';
import ImageButton from '../../components/ImageButton/ImageButton';
import {ApiCall} from '../../components/HttpRequest';

export default class imageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: null,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <View style={styles.containerStyle}>
          {this.state.imageData != null && (
            <View style={styles.imageViewStyle}>
              <Image
                resizeMode="contain"
                style={styles.imageStyle}
                source={{uri: this.state.imageData.path}}
              />

              <ImageButton
                mainStyle={{position: 'absolute', right: 0, top: 0}}
                iconStyle={{height: 30, width: 30, tintColor: 'red'}}
                uri={Images.cross}
                onPress={() => this.setState({imageData: null})}
              />
            </View>
          )}

          {this.state.imageData == null ? (
            <View>
              <AppButton
                label="Select From Gallery"
                height={40}
                s={{marginTop: 40, borderRadius: 25}}
                onPress={() => this.choosePhoto('G')}
              />
              <AppButton
                label="Select From Camera"
                height={40}
                s={{marginTop: 20, borderRadius: 25}}
                onPress={() => this.choosePhoto()}
              />
            </View>
          ) : (
            <AppButton
              label="Upload Image"
              height={40}
              s={{marginTop: 40, borderRadius: 25}}
              onPress={() => this.uploadImageApi()}
            />
          )}
        </View>

        {this.state.isBusy ? <Activity /> : null}
      </SafeAreaView>
    );
  }

  uploadImageApi() {
    this.setState({
      isBusy: true,
    });
    let body = new FormData();
    var photo = {
      uri: this.state.imageData.path,
      type: 'image/jpeg',
      name: 'photo.jpg',
    };
    body.append('post_image', photo);

    ApiCall(body, 'uploadImage', data => {
      console.log(data)
      if(data.data.status=='SUCCESS'){
        alert(data.data.message)
      }else{
        alert(data.data.message)
      }
      
      this.setState({
        isBusy: false,
      });
    });
  }
  


  choosePhoto = type => {
    var ope = null;
    if (type == 'G') {
      ope = ImagePicker.openPicker;
    } else {
      ope = ImagePicker.openCamera;
    }
    ope({
      width: 500,
      height: 500,
      cropping: true,
      // sortOrder: 'none',
      // compressImageMaxWidth: 1000,
      // compressImageMaxHeight: 1000,
      // compressImageQuality: 1,
      // compressVideoPreset: 'MediumQuality',
      // includeExif: true,
      // cropperStatusBarColor: 'white',
      // cropperToolbarColor: 'white',
      // cropperActiveWidgetColor: 'white',
      // cropperToolbarWidgetColor: '#3498DB',
    })
      .then(image => {
        this.setState({imageData: image});
        console.log(image);
      })
      .catch(e => {
        console.log(e);
        this.setState({isModalVisible: false});
      });
  };
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
  imageViewStyle: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});
