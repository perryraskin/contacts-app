import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import styles from './styles';
import ActionRow from './ActionRow';
import { capitalizeFirstLetter } from '../../helpers/string';

const Info = ({ dob, location, registered }) => {
    return (
        <View style={styles.infoContainer}>
            <ActionRow
                label='Location'
                body={
                    capitalizeFirstLetter(location.city) + ', ' +
                    location.state + ', ' + location.country
                }
            />
            <ActionRow
                label='Birthday'
                body={moment(dob).format('MMMM Do, YYYY')}
            />
            <ActionRow
                label='Registered'
                body={moment(registered).format('MMMM Do, YYYY')}
            />
        </View>
    );
};

export default Info;