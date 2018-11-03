import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
	  TouchableHighlight,
    StyleSheet
} from 'react-native';
import GridView from 'react-native-super-grid';

class CampaignView extends React.Component {
    render() {
      return (
        <Text>Here</Text>
      );
    }
  }

export default class BackgroundImage extends Component{
    // static navigationOptions={
    //     header:null
    // };

    render() {
        const resizeMode = 'center';
        const items = [
            { name: 'Courses', code: '#fff' }, { name: 'Students', code: '#fff' },
            { name: 'Article Views', code: '#fff' }, { name: 'Articles Edited', code: '#fff' },
            { name: 'Words Added', code: '#fff' }, { name: 'Articles Created', code: '#fff' },
          ];
    return (
    <View style={styles.container}>
        <GridView
            itemDimension={130}
            items={items}
            style={styles.gridView}
            renderItem={item => (
            <View style={[styles.itemContainer,]}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
            </View>  
            )}  
        />
        <CampaignView />
    </View> 
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    gridView: {
      paddingTop: 25,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 50,
    },
    itemName: {
      fontSize: 16,
      color: '#000',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#000',
    },
  });