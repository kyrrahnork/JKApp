import React from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';

console.disableYellowBox = true;

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./assets/splash.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default class Start extends React.Component {
  state = {
    userType: 'Instructor'
  }

static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle />,
}

render() {


  return (
    <View style={styles.container}>

    <Button style={styles.button}
          title="Instructor Account"
          color="#841584"
          accessibilityLabel="Instructor Account"
          onPress={()=>this.props.navigation.navigate('flatlist')}
    />
      
      <Button style={styles.button}
          title="Student Account"
          color="#841584"
          accessibilityLabel="Student Account"
          onPress={()=>this.props.navigation.navigate('StudentView')}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
button: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}
});