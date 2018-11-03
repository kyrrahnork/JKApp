import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import GridView from 'react-native-super-grid';

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
    <GridView
        itemDimension={130}
        items={items}
        style={styles.gridView}
        renderItem={item => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        )}
      />
    )
    }
}

const styles = StyleSheet.create({
    gridView: {
      paddingTop: 25,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
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