import {Platform} from 'react-native';
import AppLovinMAX from 'react-native-applovin-max';

const BANNER_AD_UNIT_ID = Platform.select({
  android: 'YOUR_ANDROID_BANNER_AD_UNIT_ID',
  ios: 'YOUR_IOS_BANNER_AD_UNIT_ID',
});

const INTERSTITIAL_AD_UNIT_ID = Platform.select({
  android: 'YOUR_ANDROID_INTERSTITIAL_AD_UNIT_ID',
  ios: 'YOUR_IOS_INTERSTITIAL_AD_UNIT_ID',
});

const loadInterstitial = async () => {
  await AppLovinMAX.loadInterstitial(INTERSTITIAL_AD_UNIT_ID);
};

function initializeBannerAds() {
  // Banners are automatically sized to 320x50 on phones and 728x90 on tablets
  // You may use the utility method `AppLovinMAX.isTablet()` to help with view sizing adjustments
  AppLovinMAX.createBanner(
    BANNER_AD_UNIT_ID,
    AppLovinMAX.AdViewPosition.BOTTOM_CENTER,
  );

  // Set background or background color for banners to be fully functional
  // In this case we are setting it to black - PLEASE USE HEX STRINGS ONLY
  AppLovinMAX.setBannerBackgroundColor(BANNER_AD_UNIT_ID, '#000000');
}

export {
  BANNER_AD_UNIT_ID,
  INTERSTITIAL_AD_UNIT_ID,
  loadInterstitial,
  initializeBannerAds,
};
