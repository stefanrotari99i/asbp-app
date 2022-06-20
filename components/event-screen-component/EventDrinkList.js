import { FlatList, View, Text, Image, StyleSheet } from "react-native"
import React, {useEffect, useState} from 'react'

const DATA = [
    {
        id: 1,
        title: "Beer",
        image: 'https://brouwland.com/img/cms/Cat_Beer.jpg',
        quantity: "0.33",
        itemcount: "24"
    },

    {
        id: 2,
        title: "Wine",
        image: 'https://cdn.vox-cdn.com/thumbor/1P7pb1Rs6Cb5aVaLE9TvZSE9aD8=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16316518/GettyImages_160836693.jpg',
        quantity: "0.75",
        itemcount: "4"
    },

    {
        id: 3,
        title: "Cocktail",
        image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/48DE1492-BE41-4D0F-9FE3-8915E27F3AF8/Derivates/FA9079FD-CECF-44D5-BA28-C6AB4751928A.jpg',
        quantity: "5",
        itemcount: "1"
    },

    {
        id: 4,
        title: "Jack Daniels Wisky",
        image: 'https://media.istockphoto.com/photos/jack-daniels-picture-id470555565',
        quantity: "0.75",
        itemcount: "2"
    },
]

const ItemDrink = ({ title, image, quantity, itemcount, firstitem, lastitem, itemid}) => {
    return (
        <View style={itemid == firstitem ? style.firstitem : itemid == lastitem ? style.lastitem : style.itemwrapp}>
            <Image source={{ uri: image }} style={style.itemimg} />
            <Text style={style.itemtitle} numberOfLines={2}>{title}</Text>
            <Text style={style.quantity}>{itemcount !=1 && itemcount + 'x'}{quantity}l</Text>
        </View>
    )
}

export const EventDrinkList = () => {
    let drinksCount = DATA.length
    const [totalQuantity, setTotalQuantity] = useState(0)
    useEffect(() => {
        let total = 0
        let items = 0
        DATA.map(item => {
            total += parseFloat(item.quantity)
            items += parseInt(item.itemcount)
        })
        setTotalQuantity(total + items)
    }
    , [])

    let firstitem = DATA[0].id
    let lastitem = DATA[DATA.length - 1].id
    return(
        <View style={{flex: 1, marginTop: 10}}>
            <View style={{width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>Drinks ({drinksCount})</Text>
                <Text style={{color: 'rgba(255,255,255, .6)', fontWeight: '700', fontSize: 12, marginLeft: 7}}>Total: {Math.round(totalQuantity)} litres</Text>
            </View>
            <FlatList
                horizontal
                data={DATA}
                renderItem={({ item }) => <ItemDrink itemid={item.id} firstitem={firstitem} lastitem={lastitem} title={item.title} image={item.image} quantity={item.quantity} itemcount={item.itemcount}/>}
            />
        </View>
    )
}

const style = StyleSheet.create({
    itemwrapp: {
        alignItems: 'center',
        marginHorizontal: 7,
        marginVertical: 7,
    },

    firstitem: {
        alignItems: 'center',
        marginRight: 7,
        marginLeft: 20,
        marginVertical: 10,
    },

    lastitem: {
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 7,
        marginVertical: 10,
    },


    itemimg: {
        width: 90,
        height: 90,
        borderRadius: 6
    },

    itemtitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        marginTop: 5,
        width: 100,
        maxWidth: 100,
        textAlign: 'center'
    },

    quantity: {
        fontSize: 13,
        fontWeight: '600',
        color: 'rgba(255,255,255,0.5)',
        marginTop: 3,
    }
})
