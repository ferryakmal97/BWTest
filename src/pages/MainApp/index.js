import React, {Component} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Thumbnail1, Thumbnail2, Thumbnail3} from '../../assets';
import {
  CBottomTab,
  CCard,
  CGap,
  CMainHeader,
  CMiniList,
  CTextInput,
} from '../../components';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        'CSS',
        'UX',
        'Swift',
        'UI',
        'HTML',
        'Javascript',
        'Golang',
        'PHP',
      ],
      courses: [
        {
          thumbnail: <Thumbnail1 />,
          hour: '3 h 30 min',
          course: 'UI',
          description: 'Advanced mobile interface design',
          price: 50,
        },
        {
          thumbnail: <Thumbnail2 />,
          hour: '2 h 30 min',
          course: 'HTML',
          description: 'Advanced mobile interface design',
          price: 100,
        },
        {
          thumbnail: <Thumbnail3 />,
          hour: '1 h 30 min',
          course: 'CSS',
          description: 'Advanced mobile interface design',
          price: 200,
        },
      ],
    };
  }
  render() {
    const {category, courses} = this.state;
    const {navigation} = this.props;
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
                Thumbnail1={item.thumbnail}
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
  }
}

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
