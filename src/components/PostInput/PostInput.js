import React, { Component } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';

class PostInput extends Component {
  state = {
    placeName: '',
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val,
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="Share a Post"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button
            style={styles.placeButton}
            title="Add"
            onPress={this.placeSubmitHandler}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});

export default PostInput;
