import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import DealList from './DealList'
import DealDetail from './DealDetail'
import SearchBar from './SearchBar'

import { connect } from 'react-redux'
import { fetchData, searchDeals, fetchDetail, backToDealList } from '../actions'

class App extends React.Component {

  componentDidMount() {
    this.props.searchDeals()
  }

  render() {
    if (this.props.appData.currentDeal) {
      return (
        <View style={styles.main}>
          <DealDetail
            deal={this.props.appData.currentDeal}
            onBack={this.props.backToDealList}
          />
        </View>
      )
    }
    return (
      <View style={styles.main}>
        <SearchBar searchDeals={this.props.searchDeals} searchTerm={this.props.appData.searchTerm} />
        <DealList deals={this.props.appData.data} onItemPress={this.props.fetchDetail} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 30,
  },
  header: {
    fontSize: 40,
  },
})

function mapStateToProps(state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
    searchDeals: (searchStr) => dispatch(searchDeals(searchStr)),
    fetchDetail: (dealId) => dispatch(fetchDetail(dealId)),
    backToDealList: () => dispatch(backToDealList())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
