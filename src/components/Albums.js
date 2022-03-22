/* eslint-disable prettier/prettier */
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect, useRef} from 'react';
import theme from '../../assets/themes';
import albumPage from '../../assets/data/albumPage';
import Card from './Card';
import Separator from './Separator';
import {Icon} from 'react-native-elements';
import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheetContent from './BottomSheetContent';
const Albums = ({navigation, navigation: {setOptions}}) => {
  const SheetRef = useRef();
  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('Hello')}>
          <View style={styles.openSheetButton}>
            <Icon
              name="plus"
              type="font-awesome"
              size={16}
              color={theme.colors.white}
            />
          </View>
        </TouchableOpacity>
      ),
    });
  });
  const renderBottomSheetContent = () => <BottomSheetContent />;
  return (
    <>
      <ScrollView>
        <View style={styles.albumContainer}>
          {albumPage.map((item, index) => (
            <View key={index}>
              <Card item={item} navigation={navigation} />
              {index === 1 && <Separator />}
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomSheet
        ref={SheetRef}
        snapPoints={[250, 0]}
        initialSnap={0}
        borderRadius={10}
        renderContent={renderBottomSheetContent}
      />
    </>
  );
};

export default Albums;
const styles = StyleSheet.create({
  albumContainer: {
    flex: 1,
    marginBottom: theme.spacing.l,
  },
  openSheetButton: {
    width: 35,
    height: 35,
    backgroundColor: theme.colors.primary,
    marginRight: theme.spacing.sm,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
