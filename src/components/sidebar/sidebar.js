import React, { PureComponent } from "react";
import { TouchableOpacity, View, Text, ScrollView } from "react-native";
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
            <View style={styles.sideBarContainer}>

                <ScrollView contentContainerStyle={{ minHeight: "100%", flexDirection: "column" }}>

                    <View style={styles.upgradeContainer}>
                        <TouchableOpacity>
                            <Icon  style={styles.upgradeIcon} name="ios-close" type="Ionicons"/>  
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.upgradeButtonContainer}>
                            <Text style={styles.upgradeText}>Upgrade to Premium</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.topNavListContainer}>

                        <TouchableOpacity style={styles.navListDetails} onPress={() => navigate("news")}>
                            <Icon  style={styles.navListIcon} name="ios-contact" type="Ionicons"/>    
                            <Text style={styles.navListText}>Edit Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.navListDetails} onPress={() => navigate("league")}>
                            <Icon  style={styles.navListIconAlt} name="settings" type="Feather"/>
                            <Text style={styles.navListText}>Settings</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.navListDetails} onPress={() => navigate("camp")}>
                            <Icon  style={styles.navListIcon} name="ios-person-add" type="Ionicons"/>    
                            <Text style={styles.navListText}>Invite a Friend</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.navListDetails} onPress={() => navigate("pickup")}>    
                            <Icon  style={styles.navListIconAlt} name="ios-help-circle-outline" type="Ionicons"/>       
                            <Text style={styles.navListText}>Help</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.navListDetails} onPress={() => navigate("socialScreen")}>
                            <Icon  style={styles.navListIcon} name="ios-bug" type="Ionicons"/>   
                            <Text style={styles.navListText}>Report a Bug</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.topNavListContainer}>
                        <TouchableOpacity style={styles.logoutButtonContainer}>
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.topNavListContainer}>
                        <Text style={styles.version}>v{Constants.manifest.version}</Text>
                    </View>

                   

                </ScrollView>

            </View>
        );
    }
}

export default Sidebar;
