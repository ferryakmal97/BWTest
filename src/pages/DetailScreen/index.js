import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Play} from '../../assets';
import {CGap, CHeader} from '../../components';
import {colors, width} from '../../utils';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.route.params.index,
      thumbnail: props.route.params.thumbnail,
      hour: props.route.params.hour,
      course: props.route.params.course,
      description: props.route.params.description,
      price: props.route.params.price,
      tags: [
        {title: 'lessons', active: true},
        {title: 'Tests', active: false},
        {title: 'Discuss', active: false},
      ],
    };
  }

  tagsStyle = index => {
    switch (index) {
      case 0:
        return styles.lessonsButton;
      case 1:
        return styles.testButton;
      case 2:
        return styles.discussButton;
      default:
        break;
    }
  };

  changeTag = index => {
    this.setState(prevState => ({
      tags: prevState.tags.map((value, idx) => {
        if (idx === index) {
          return {...value, active: true};
        } else {
          return {...value, active: false};
        }
      }),
    }));
  };

  render() {
    const {thumbnail, hour, course, description, price, test, index, tags} =
      this.state;
    return (
      <View style={styles.container}>
        <CHeader title={course} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container2}>
          <View style={styles.tags}>
            <Text style={styles.tagsText}> Tags For Headers </Text>
            <Text style={styles.lessons}> 3 of 11 lessons </Text>
            <View style={styles.sub}>
              {tags.map((value, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.7}
                    style={this.tagsStyle(index)}
                    onPress={() => this.changeTag(index)}>
                    <Text style={styles.subText(value.active)}>
                      {value.title}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.imageContainer(index)}>
              {thumbnail}
              <TouchableOpacity activeOpacity={0.7} style={styles.play}>
                <Play />
              </TouchableOpacity>
            </View>
            <CGap height={12} />
            <Text style={styles.tagsText}>Introduction</Text>
            <Text style={styles.textContent}>
              You can launch a new career in web develop- ment today by learning
              HTML & CSS. You don't need a computer science degree or expensive
              software. All you need is a computer, a bit of time, a lot of
              determination, and a teacher you trust. Once the form data has
              been validated on the client-side, it is okay to submit the form.
              And, since we covered validation in the previous article, we're
              ready to submit! This article looks at what happens when a user
              submits a form — where does the data go, and how do we handle it
              when it gets there? We also look at some of the security concerns.
              You can launch a new career in web develop- ment today by learning
              HTML & CSS. You don't need a computer science degree or expensive
              software. All you need is a computer, a bit of time, a lot of
              determination, and a teacher you trust. Once the form data has
              been validated on the client-side, it is okay to submit the form.
              And, since we covered validation in the previous article, we're
              ready to submit! This article looks at what happens when a user
              submits a form — where does the data go, and how do we handle it
              when it gets there? We also look at some of the security concerns.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  tags: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  tagsText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 32,
  },
  lessons: {
    fontSize: 18,
  },
  sub: {
    flexDirection: 'row',
    width: '100%',
  },
  subText: active => ({
    fontSize: 24,
    fontWeight: active ? 'bold' : 'normal',
    color: 'black',
  }),
  lessonsButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ink,
    padding: 10,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  testButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ink,
    padding: 10,
    marginHorizontal: 5,
  },
  discussButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ink,
    padding: 10,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  content: {
    position: 'relative',
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 20,
  },
  imageContainer: index => ({
    backgroundColor: index % 2 == 0 ? colors.ink : colors.lightblue,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: width / 1.5,
    borderRadius: 12,
    marginVertical: 10,
  }),
  play: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 16,
    marginBottom: 12,
  },
  textContent: {
    fontSize: 16,
    lineHeight: 24,
  },
});
