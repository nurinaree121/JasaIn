import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TextInput, Pressable, TouchableOpacity, FlatList } from 'react-native';
import { Element3, Receipt21, Clock, Message, SearchNormal, Notification } from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
import { CategoryList, BlogList } from './src/data';
import { ListHorizontal, ItemSmall } from './src/components';

const ItemCategory = ({ item, onPress, color }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={category.item}>
            <Image source={{ uri: item.icon }} style={{ width: 40, height: 40, borderRadius: 20 }} />
                <Text style={{ ...category.title, color }}>{item.categoryName}</Text>
            </View>
        </TouchableOpacity>
    );
};

const FlatListCategory = () => {
    const [selected, setSelected] = useState(1);
    const renderItem = ({ item }) => {
        const color = item.id === selected ? colors.deepOrangeYellow() : colors.grey();
         return (
            <ItemCategory
                item={item}
                onPress={() => setSelected(item.id)}
                color={color}
            />
        );
    };
    return (
        <FlatList
            data={CategoryList}
            keyExtractor={item => item.id}
            renderItem={item => renderItem({ ...item })}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>JasaIn</Text>
            </View>
            <View style={searchBar.container}>
                <TextInput
                    style={searchBar.input}
                    placeholder="Search"
                />
                <Pressable style={searchBar.button}>
                    <SearchNormal size={20} color={colors.white()} />
                </Pressable>
            </View>
            <View style={styles.listCategory}>
                <FlatListCategory />
            </View>
            <ListBlog /> 
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.deepOrangeYellow(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
});

const searchBar = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        backgroundColor: colors.deepOrangeYellow(0.03),
        borderColor: colors.deepOrangeYellow(0.2),
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
    },
    input: {
        height: 40,
        padding: 10,
        width: '90%',
    },
    button: {
        backgroundColor: colors.deepOrangeYellow(),
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
});

const ListBlog = () => {
    const horizontalData = BlogList.slice(0, 5);
    const verticalData = BlogList.slice(5);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.listBlog}>
                <ListHorizontal data={horizontalData} />
                <View style={styles.listCard}>
                    {verticalData.map((item, index) => (
                        <ItemSmall item={item} key={index} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

