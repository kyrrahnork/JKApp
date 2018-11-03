import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import GridView from 'react-native-super-grid';
import CampaignView from './CampaignView';

// class CampaignView extends React.Component {
//     render() {
//       return (
//         <Text style={styles.campaignView}>Here</Text>
//       );
//     }
//   }

export default class BackgroundImage extends Component{

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
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginBottom: 0,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 60,
    },
    itemName: {
      flex: 2,
      fontSize: 16,
      color: '#000',
      fontWeight: '600',
    },
    itemCode: {
      flex: 2,
      fontWeight: '600',
      fontSize: 16,
      color: '#000',
    },
    campaignView:{
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });