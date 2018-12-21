import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PostInput from './src/components/PostInput/PostInput';
import PostList from './src/components/PostList/PostList';
import PostDetail from './src/components/PostDetail/PostDetail';

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null,
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri:
              'http://stage808.asset.co//uploads/882dc4c433a77894efb5c24d7918f75b.jpg',
          },
        }),
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        }),
      };
    });
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null,
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PostDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PostInput onPlaceAdded={this.placeAddedHandler} />
        <PostList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
