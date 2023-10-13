import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import {Color, FontSize} from '../GlobalStyles';

interface SearchBarProps {
  placeholder: string;
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({placeholder, onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onSearch}
      />
      <Image
        style={styles.searchIcon}
        resizeMode="cover"
        source={require('../assets/octiconsearch16.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderRadius: 10,
    padding: 5,
    top: 30,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
  },
});

export default SearchBar;
