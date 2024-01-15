import React from 'react'
import { View, Text, FlatList, Image, Dimensions } from 'react-native'

export default function Stylists() {
    const stylistList = [
        {
            id: 1,
            name: 'John S',
            imgUrl: "https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6840.jpg?w=740",
        },
        {
            id: 2,
            name: 'Smith K',
            imgUrl: "https://img.freepik.com/premium-photo/memoji-african-american-man-white-background-emoji_826801-6855.jpg?w=740"


        },
        {
            id: 3,
            name: 'Joe',
            imgUrl: "https://cdn1.iconfinder.com/data/icons/diversity-avatars-vol-01/512/Female009-512.png"
        },
        {
            id: 4,
            name: 'Henry',
            imgUrl: "https://img.freepik.com/premium-photo/young-man-working-laptop-boy-freelancer-student-with-computer-cafe-table_826801-6658.jpg?w=740"

        },
        {
            id: 5,
            name: 'Joy',
            imgUrl: "https://img.freepik.com/fotos-premium/memoji-homem-feliz-em-fundo-branco-emoji_826801-6832.jpg?w=740"

        }
    ]
    return (
        <View style={{ marginTop: 5 }}>
            <Text style={{ margin: 10, fontSize: 17, fontWeight: 'bold', opacity: 0.7 }}>Stylists</Text>
            <FlatList
                data={stylistList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{ display: 'flex', margin: 2, alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#fff', width: 70, height: 80, margin: 8, padding: 12, borderRadius: 30, alignItems: 'center' }}>
                            <Image style={{ width: 60, height: 58, borderRadius: 30 }} source={{ uri: item.imgUrl }} />
                        </View>
                        <Text>
                            {item.name}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}
