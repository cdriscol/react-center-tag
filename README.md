# react-center
Center your react component, the wrong way!

## installation
```bash
$ yarn add react-center
```

## usage
```javascript
import React from 'react';
import Center from 'react-center';

class MyComponent extends React.Component {
  render() {
      return (
        <Center>{this.props.children}</Center>
      )
  }
}
```