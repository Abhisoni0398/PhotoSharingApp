import React, {useCallback, useEffect, useState} from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import * as RNIap from 'react-native-iap';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import Colors from '../constants/Colors';
import commonStyles, {hitSlopProp} from '../constants/commonStyles';
import Images from '../constants/Images';
import {showError} from '../utils/helperFunctions';
import {moderateScale} from '../utils/responsiveSize';
import CustomButton from './CustomButton';
import actions from '../redux/actions';
import NavigationStrings from '../constants/NavigationStrings';
import {useNavigation} from '@react-navigation/native';

let purchaseUpdatedListener;
let purchaseErrorListener;

const MatchingRevealModalClone = ({
  modalVisible = false,
  matchedUserDeatail = {},
  onModalClose = () => {},
  matchId = 0,
}) => {
  const userData = useSelector(({auth}) => auth.user);
  const appProduct = useSelector(({appProduct}) => appProduct);
  // alert(matchId, 'MATCHID IN MODAL');
  console.log('appProductappProduct', matchId);

  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(false);

  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState({});
  const itemSkus = Platform.select({
    ios: ['com.digyooapp.match1.99'],
    android: ['products123.com'],
  });

  let device_type = Platform?.OS == 'ios' ? 'ios' : 'android';

  useEffect(() => {
    RNIap.initConnection()
      .catch(() => {
        console.log('ERROR CONNECING');
      })
      .then(res => {
        console.log(res, 'CONNECTED TO STORE');
        RNIap.getProducts(itemSkus)
          .catch(() => {
            console.log('DIDNT FOUND PRODUCTS');
          })
          .then(res => {
            setPrice(res[0]?.price);
            console.log('GOT PRODUCTS', res);
            // alert(res?.skuDetailsToken);
            console.log(res?.skuDetailsToken);

            setProducts(res);
            console.log(products, 'PRODUCTS HERE+++');
          });
      });

    purchaseErrorListener = RNIap.purchaseErrorListener(error => {
      console.log(error, 'ERROR HERE+++++++++');
      if (error.responseCode === '2') {
        console.log('User cancelled subscription.');
      } else {
        console.log(error, 'ERROR HERE+++++++++');
      }
    });

    purchaseUpdatedListener = RNIap.purchaseUpdatedListener(purchase => {
      console.log(purchase, 'purchasepurchase');
      try {
        let receipt = purchase.transactionReceipt;
        // let receiptObj = JSON.parse(receipt);

        console.log(receipt, '1 RRRRRRRRRRRRRRRRRRRRRR');

        // console.log(receiptObj, '2 RRRRRRRRRRRRRRRRRRRRRR');
        verifyPaymentRes(purchase, matchId, price);
        console.log(matchId, 'ID ID ID DID ID ');
      } catch (err) {
        console.log(err, 'ERROR IN PURCHASE PURCHASE');
      }
    });

    return () => {
      if (!!purchaseUpdatedListener) {
        purchaseUpdatedListener.remove();
      }
      if (!!purchaseErrorListener) {
        purchaseErrorListener.remove();
      }
    };
  }, [matchId, price]);

  const requestPurchase = () => {
    // setTimeout(() => {
    setLoading(true);
    // if (Platform.OS == 'ios') {
    RNIap.requestPurchase({
      sku: products[0]?.productId,
      // andDangerouslyFinishTransactionAutomaticallyIOS: false,
    })
      .then(res => {
        setLoading(false);
        console.log(res, 'RES OF PURCHASE ++++');
      })
      .catch(err => {
        setLoading(false);
        console.log('err raised in payment request', err);
        // onModalClose();
      });
    // } else {
    //   setLoading(false);
    // }
    // }, 400);
  };

  const verifyPaymentRes = purchase => {
    setLoading(true);
    let data = {
      receipt_data: purchase?.transactionReceipt,
      amount: price,
      device_type: device_type,
      match_id: matchId,
      product_id: purchase.productId,
      purchase_token: purchase?.purchaseToken,
    };

    console.log(data, 'API DATA verifyPaymentRes');
    actions
      .verifyPayment(data)
      .then(res => {
        if (Platform.OS == 'ios') {
          RNIap.finishTransaction(purchase)
            .then(res => {
              console.log('finish transaction ===>>>>>>>>', res);
            })
            .catch(err => {
              console.log(err, 'finish transaction ===>>>>>>>>');
            });
        }
        // actions.appProduct(res?.data?.all_matches);
        console.log(res, 'VERIFY PAYMENT+++++++++++++++++++++++++++++');
        acknowledgePayment(purchase);
        // if (Platform.OS == 'ios') {
        //   RNIap.finishTransaction(purchase, true)
        //     .then(res => {
        //       console.log('finish transctiont true', res);
        //     })
        //     .catch(error => {
        //       console.log('finish transction error', error);
        //     });
        // }

        onModalClose();
        // setTimeout(() => {
        // setLoading(false);
        navigation.navigate(NavigationStrings.CHAT_DETAIL_SCREEN);
        // }, 3000);
      })
      .catch(err => {
        setLoading(false);
        onModalClose();
        console.log(
          err,
          'Error here in matching modal++++++++++++++++++++++++++++++++++++++++',
        );
      });
  };

  const acknowledgePayment = purchase => {
    if (Platform.OS == 'android') {
      RNIap.acknowledgePurchaseAndroid(purchase?.purchaseToken)
        .then(res => {
          console.log('ackhnowlege succesfully...!!!!', res);
          RNIap.finishTransaction(purchase, true)
            .then(res => {
              console.log('finish transctiont true', res);
              // verifyPaymentRes();
            })
            .catch(error => {
              // verifyPaymentRes();
              console.log('finish transction error', error);
            });
        })
        .catch(error => {
          console.log('Error in acknowlege', error);
          // verifyPaymentRes();
        });
    }
  };

  return (
    <Modal
      onBackdropPress={onModalClose}
      visible={modalVisible}
      style={{flex: 1, margin: 0}}>
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.blackOpacity01,
            paddingHorizontal: moderateScale(24),
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '100%',
              borderRadius: 15,
              ...commonStyles.shadowStyle,
              padding: moderateScale(24),
            }}>
            <TouchableOpacity
              onPress={onModalClose}
              activeOpacity={0.7}
              style={{
                position: 'absolute',
                right: 0,
                margin: moderateScale(8),
              }}
              hitSlop={hitSlopProp}>
              <Image source={Images.CrossIcon} />
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              {/* <Text
                style={{
                  ...commonStyles.fontB28,
                  color: Colors.primaryColor,
                  marginBottom: moderateScale(20),
                }}>
                Last Call
              </Text> */}

              <Text
                style={{
                  ...commonStyles.fontB24,
                  color: Colors.primaryColor,
                  // marginTop: moderateScale(40),
                  textAlign: 'center',
                }}>
                {'It’s a match, ' + matchedUserDeatail?.first_name + '!'}
              </Text>
              <Text
                style={{
                  ...commonStyles.fontM14,
                  opacity: 0.7,
                  marginTop: moderateScale(4),
                  marginBottom: moderateScale(20),
                }}>
                Pay just $.99 to send your message
              </Text>
              <View>
                <Image
                  style={{
                    height: moderateScale(260),
                    width: moderateScale(160),
                    borderRadius: 30,
                  }}
                  source={{uri: matchedUserDeatail?.profile_image}}
                />
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    backgroundColor: Colors.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: -25,
                    left: -25,
                    ...commonStyles.shadowStyle,
                  }}>
                  <Image
                    source={Images.MatchActive}
                    style={{
                      tintColor: Colors.BrownColor,
                      transform: [{rotate: '-10deg'}],
                    }}
                  />
                </View>
              </View>
              {/* <Text
                style={{
                  ...commonStyles.fontB24,
                  color: Colors.primaryColor,
                  marginTop: moderateScale(40),
                }}>
                It’s a match, Jake!
              </Text>
              <Text
                style={{
                  ...commonStyles.fontM14,
                  opacity: 0.7,
                  marginTop: moderateScale(4),
                }}>
                Pay just $0.99 to see your match
              </Text> */}
            </View>
            <CustomButton
              text={'Send message'}
              style={{
                width: '100%',
                alignItems: 'stretch',
                marginTop: moderateScale(50),
              }}
              textStyle={{color: Colors.white}}
              // onPress={
              //   Platform.OS == 'ios' ? props.onReveal : alert('Coming soon!')
              // }
              onPress={requestPurchase}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MatchingRevealModalClone;
