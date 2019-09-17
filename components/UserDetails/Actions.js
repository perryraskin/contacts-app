import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import colors from '../../config/colors';
import { toPhoneNumber } from '../../helpers/string';
import ActionRow from './ActionRow';

const Actions = ({ email, phone }) => {
    return (

        // Actions Container
        <View style={styles.actionContainer}>

            {/* Email Details Row */}
            <ActionRow
                label="Email"
                body={email}
                actions={[
                    {
                        onPress: () => null,
                        iosIcon: 'ios-mail',
                        androidIcon: 'md-mail',
                        iconColor: colors.mailIconColor,
                    }
                ]}
            />
            {/* Phone Row */}
            <ActionRow
                label="Phone"
                body={toPhoneNumber(phone)}
                actions={[
                    {
                        onPress: () => null,
                        iosIcon: 'ios-call',
                        androidIcon: 'md-call',
                        iconColor: colors.callIconColor,
                    }
                ]}
            />
        </View>
    );
};

export default Actions;