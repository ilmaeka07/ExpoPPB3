import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

export default function App() {
    const [message, setMessage] = useState('');

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    // Gambar lokal dengan require()
                    source={require('../assets/images/OIP.jpeg')}
                    style={styles.avatar}
                />
                <Text style={styles.headerText}>Chat with Ilma</Text>
            </View>

            {/* Chat messages */}
            <View style={styles.messagesContainer}>
                {Array.from({ length: 13 }, (_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.messageBubble,
                            index % 2 === 0 ? styles.myMessage : {}
                        ]}
                    >
                        <Text style={styles.messageText}>
                            {index % 2 === 0 ? 'I am good, thank you!' : 'How are you doing today?'}
                        </Text>
                    </View>
                ))}
            </View>

            {/* Input field */}
            <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Type a message..."
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#075E54',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    messagesContainer: {
        padding: 10,
    },
    messageBubble: {
        backgroundColor: '#ececec',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        alignSelf: 'flex-start',
    },
    myMessage: {
        backgroundColor: '#DCF8C6',
        alignSelf: 'flex-end',
    },
    messageText: {
        fontSize: 16,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        margin: 10,
        backgroundColor: '#fff',
    },
});
