import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();
    const [text, setText] = useState('');

    const saveButtonTap = () => {
        // Save button action
    };

    const handleEditProfile = () => {
        // Handle edit profile action
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#9CD4F8', alignItems:'center' }}>
            <View style={styles.container}>
                <Image
                    source={require('../images/user_profile.png')}
                    style={styles.profileImage}
                />
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={handleEditProfile}
                >
                    <Image
                        source={require('../images/pencil.png')}
                        style={styles.editIcon}
                    />
                </TouchableOpacity>
            </View>
            {/* first name */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    placeholder="First name"
                    placeholderTextColor="#999"
                />
            </View>
            {/* last name */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    placeholder="Last name"
                    placeholderTextColor="#999"
                />
            </View>
            {/* email */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    placeholder="Email"
                    placeholderTextColor="#999"
                />
            </View>
            <TouchableOpacity
                onPress={saveButtonTap}
                style={styles.saveBtn}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>SAVE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: '5%',
        marginTop: '5%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4
    },
    input: {
        padding: 15,
        fontSize: 16
    },
    saveBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
        margin: '5%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#0081FB',
        borderRadius: 8
    },
    container: {
        alignItems: 'center',
        width:'35%',
        marginTop: '5%'
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    editButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#0081FB',
        borderRadius: 20,
        padding: 8,
    },
    editIcon: {
        width: 20,
        height: 20,
        tintColor: 'white',
    }
});

export default ProfileScreen;