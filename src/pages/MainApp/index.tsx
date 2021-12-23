import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  CBottomTab,
  CCard,
  CGap,
  CMainHeader,
  CMiniList,
  CTextInput,
} from '../../components';
import {category, courses} from '../../utils';

const MainApp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CMainHeader title="Juana Antonieta" />
      <View style={styles.content}>
        <CGap height={10} />
        <CTextInput />
        <CGap height={10} />
        <View style={styles.listCategory}>
          <Text style={styles.category}>Category : </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {category.map((value, index) => (
              <CMiniList key={index} name={`#${value}`} />
            ))}
          </ScrollView>
        </View>
        <CGap height={10} />
        <FlatList
          data={courses}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            <CCard
              backgroundColor={index}
              Thumbnail={item.thumbnail}
              hour={item.hour}
              course={item.course}
              description={item.description}
              price={item.price}
              onPress={() =>
                navigation.navigate('DetailScreen', {...item, index})
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <CBottomTab />
    </View>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 12,
    flex: 1,
    backgroundColor: 'white',
  },
  listCategory: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    color: 'black',
    fontSize: 16,
  },
});
