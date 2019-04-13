import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import DealItem from './DealItem'

class DealList extends React.Component {

  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({ item }) => (
            <DealItem deal={item} onPress={this.props.onItemPress} />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee'
  },
})

export default DealList
