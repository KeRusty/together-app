import React, { PureComponent } from "react";
import { TouchableOpacity, View, Text, ScrollView, SafeAreaView } from "react-native";
import { Icon } from "native-base";
import Constants from 'expo-constants'

import styles from "./sidebar-styles";

class Sidebar extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { navigate } = this.props;
        const user = this.props.user;

        return (
            <SafeAreaView style={styles.sideBarContainer}>

                <ScrollView contentContainerStyle={{ minHeight: "100%", flexDirection: "column" }}>

                    <View style={styles.topNavListContainer}>

                        <TouchableOpacity style={styles.navListDetails} onPress={() => navigate("news")}>
                            <Text style={styles.navListText}>Edit Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.navListDetails} onPress={() => navigate("league")}>
                            <Text style={styles.navListText}>Settings</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.navListDetails} onPress={() => navigate("camp")}>
                            <Text style={styles.navListText}>Invite a Friend</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.navListDetails} onPress={() => navigate("pickup")}>           
                            <Text style={styles.navListText}>Help</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.navListDetails} onPress={() => navigate("socialScreen", { tab: "community" })}>
                            <Text style={styles.navListText}>Report a Bug</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.topNavListContainer}>
                        <TouchableOpacity style={styles.navListDetails}>
                            <Text style={styles.navListText}>Logout</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.version}>v{Constants.manifest.version}</Text>

                </ScrollView>

            </SafeAreaView>
        );
    }
}

export default Sidebar;
