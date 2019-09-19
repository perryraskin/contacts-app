import React, { Component, ReactPropTypes } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, Button, Icon } from 'react-native-elements';

import { contacts } from '../config/data';
import colors from '../config/colors';
import { ListItem, styles } from '../components/ListItem/index';
import { Stitch, RemoteMongoClient } from "mongodb-stitch-react-native-sdk";
import { MONGODB_APP_CLIENT } from 'react-native-dotenv'

class Contacts extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Singles',
          headerRight: (
            <Button
              buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
              icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28 } }}
              onPress={() => { navigation.push('NewContact') }}
            />
          ),
        };
      };

    constructor() {
        super();
        //this.ref = firebase.firestore().collection('users');
        this.unsubscribe = null;
        this.state = {
          isLoading: true,
          users: []
        };

        this._loadClient = this._loadClient.bind(this);
        this._loadData = this._loadData.bind(this);
    }
    componentDidMount() {
        this.unsubscribe = this.onCollectionUpdate;
        this._loadClient();
    }

    _loadClient() {
        if (Stitch.hasAppClient(MONGODB_APP_CLIENT)) {
          const app = Stitch.getAppClient(MONGODB_APP_CLIENT);
          this._loadData(app);
        } else {
          Stitch.initializeAppClient(MONGODB_APP_CLIENT)
          .then(app => this._loadData(app))
          .catch(err => console.error(err));
        }
    }
    _loadData(appClient) {
      const mongoClient = appClient.getServiceClient(
          RemoteMongoClient.factory,
          "mongodb-atlas"
        );
        const db = mongoClient.db("sidapp");
        const users = db.collection("users");
        users
          .find({ type: 2 })
          .asArray()
          .then(users => {
            this.setState({ users });
          })
          .catch(err => {
            console.warn(err);
          });
    }

    onCollectionUpdate = (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          const { name, location, email, phone, gender, image_url } = doc.data();
          users.push({
            key: doc.id,
            doc, // DocumentSnapshot
            name,
            location,
            email,
            phone,
            gender,
            image_url,
          });
        });
        this.setState({
          users,
          isLoading: false,
       });
    }

    handleRowPress = (item) => {
        this.props.navigation.navigate('Details', item);
    };

    render() {
        const users = this.state.users;

        return (
        <FlatList
            style={{ backgroundColor: colors.background }}
            data={users}
            renderItem={({ item }) =>
                <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
            }
            keyExtractor={(item) => item.email}
            />
        );
    }
}

export default Contacts;
