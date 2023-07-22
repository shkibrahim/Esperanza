import { View, Text, ImageBackground } from 'react-native'

const Back = ({ children }) => {
    return (
      <View>
        
        <ImageBackground source={require("../Images/loginbg1.png")} style={{height:'100%',}}/>
        <View style={{ position: "absolute" }}>
          {children}
        </View>
      </View>
    );
  }
export default Back;
