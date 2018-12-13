import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Camera, Permissions } from "expo";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      type: Camera.Constants.Type.back,
    }

    Permissions.askAsync(Permissions.CAMERA).then(result => {
      console.log(result);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          type={this.state.type}
          style={{ flex: 1 }}
        >
          <Button
            title="Flip"
            onPress={() => this.setState({
              // condition ? true behav : false behav
              type: this.state.type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            })}
          ></Button>
        </Camera>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
