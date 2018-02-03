import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Cover from '../Covers/Cover';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 2,
    paddingLeft: 2
  }
})

const CoversList = ({ data, onClick, onEndReached, listHeaderComponent, listFooterComponent }) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={data}
        keyExtractor={(_, index) => index}
        renderItem={item => <Cover book={item.item} onClick={() => onClick(item.item)}/>}
        onEndReached={() => onEndReached()}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent} />
    </View>
  )
}

export default CoversList;
