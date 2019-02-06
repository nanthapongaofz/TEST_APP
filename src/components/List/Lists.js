import React from 'react';
import {Text} from 'react-native';
import ListItem from './ListItem';

const Lists = (props) => {
  return props.places.map(val =>
    <ListItem placesName={val}/>
  )
};

export default Lists;
