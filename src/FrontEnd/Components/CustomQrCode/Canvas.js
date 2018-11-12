'use strict'

import React from 'react'
import {View, WebView} from 'react-native'

class Canvas extends React.Component {
  render () {
    var contextString = JSON.stringify(this.props.context)
    var renderString = this.props.render.toString()
    return (
      <View>
        <WebView
          automaticallyAdjustContentInsets={false}
          contentInset={{top: 0, right: 0, bottom: 0, left: 0}}
          source={{html: "<style>*{margin:0;padding:0;}canvas{position:absolute;transform:translateZ(0);}</style><canvas></canvas><script>var canvas = document.querySelector('canvas');(" + renderString + ').call(' + contextString + ', canvas);</script>'}}
          opaque={false}
          underlayColor={'transparent'}
          style={this.props.style}
          javaScriptEnabled={true}
        />
      </View>
    )
  }
}

export default Canvas