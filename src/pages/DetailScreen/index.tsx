import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppLovinMAX from 'react-native-applovin-max';
import {Play} from '../../assets';
import {CGap, CHeader} from '../../components';
import {
  BANNER_AD_UNIT_ID,
  colors,
  INTERSTITIAL_AD_UNIT_ID,
  loadInterstitial,
  width,
} from '../../utils';

interface data {
  index: number;
  thumbnail: JSX.Element;
  hour: string;
  course: string;
  description: string;
  price: number;
  tags: {title: string; active: boolean}[];
}

const DetailScreen = props => {
  const [state, setState] = useState<data>({
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
  });

  useEffect(() => {
    loadInterstitial();
    AppLovinMAX.showInterstitial(INTERSTITIAL_AD_UNIT_ID);
  }, []);

  const tagsStyle = (index: number) => {
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

  const changeTag = (index: number) => {
    setState(prev => ({
      ...prev,
      tags: prev.tags.map((value, idx) => {
        if (idx === index) {
          return {...value, active: true};
        } else {
          return {...value, active: false};
        }
      }),
    }));
  };

  const {thumbnail, hour, course, description, price, index, tags} = state;
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
                  style={tagsStyle(index)}
                  onPress={() => changeTag(index)}>
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
            determination, and a teacher you trust. Once the form data has been
            validated on the client-side, it is okay to submit the form. And,
            since we covered validation in the previous article, we're ready to
            submit! This article looks at what happens when a user submits a
            form — where does the data go, and how do we handle it when it gets
            there? We also look at some of the security concerns. You can launch
            a new career in web develop- ment today by learning HTML & CSS. You
            don't need a computer science degree or expensive software. All you
            need is a computer, a bit of time, a lot of determination, and a
            teacher you trust. Once the form data has been validated on the
            client-side, it is okay to submit the form. And, since we covered
            validation in the previous article, we're ready to submit! This
            article looks at what happens when a user submits a form — where
            does the data go, and how do we handle it when it gets there? We
            also look at some of the security concerns.
          </Text>
        </View>
      </ScrollView>
      <AppLovinMAX.AdView
        adUnitId={BANNER_AD_UNIT_ID}
        adFormat={AppLovinMAX.AdFormat.BANNER}
        style={styles.banner}
      />
    </View>
  );
};

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
  subText: (active: boolean) => ({
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
    paddingBottom: 60,
  },
  imageContainer: (index: number) => ({
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
  banner: {
    // Set background color for banners to be fully functional
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});
