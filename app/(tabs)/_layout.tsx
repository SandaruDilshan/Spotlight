import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '@/constants/theme';

export default function TabsLayouts() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.grey,
            tabBarStyle: {
                backgroundColor: 'black',
                borderTopWidth: 0,
                position: 'absolute',
                height: 40,
                paddingBottom:8,
            }
        }}>
            <Tabs.Screen name='index'
                options={{                                                                                
                    tabBarIcon: ({ size, color }) => <Ionicons name='home' size={size} color={color} /> //Tab icon option defined as a function that returns an Ionicons component dynamically
                }}                                                                                       //"dynamically" means based on the current state or input at runtime — not hardcoded or fixed in advance.
            />

            <Tabs.Screen name='bookmarks'
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name='bookmark' size={size} color={color} />
                }}
            />
            <Tabs.Screen name='create'
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name='add-circle' size={size} color={COLORS.primary} />
                }}
            />
            <Tabs.Screen name='notifications'
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name='notifications' size={size} color={color} />
                }}
            />
            <Tabs.Screen name='profile'
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name='person-circle' size={size} color={color} />
                }}
            />
        </Tabs>
    )
}