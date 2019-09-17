import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';

const Header = ({ image_url: image, name }) => {
    return (
        <View style={styles.headerContainer}>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
            <Text style={styles.name}>
                {capitalizeFirstLetter(name.first)} {capitalizeFirstLetter(name.last)}
            </Text>
        </View>
    )
};

export default Header;