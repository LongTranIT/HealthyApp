/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {loadPartialConfigAsync} from '@babel/core';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Component,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccountService from '../../services/account.service'

export default Login = ({navigation}) => {
  const [username, setUserName]=useState('')
  const [password, setPassword]=useState('')
  const accountService=new AccountService()

  const onSubmit=async ()=>{
    try{
			const user=await accountService.login(username,password)
			if(user.ho_ten){
        AsyncStorage.setItem('ho_ten', user.ho_ten);
        AsyncStorage.setItem('_id', user['_id']);
        AsyncStorage.setItem('gioi_tinh', user.gioi_tinh);
        AsyncStorage.setItem('tuoi', user.tuoi.toString());
        AsyncStorage.setItem('can_nang', user.can_nang.toString());
        AsyncStorage.setItem('chieu_cao', user.chieu_cao.toString());
        AsyncStorage.setItem('calo_muc_tieu', user.calo_muc_tieu.toString());
				alert("Đăng nhập thành công")
        navigation.replace('Home')
			}
			else{
				alert(user.message)
			}
		}
		catch(ex){
			alert(ex);
		}
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: '70%',
          margin: 60,
        }}>
        <View>
          <Image
            source={require('../../img/logo.png')}
            style={{
              width: 100,
              height: 100,
              marginBottom: 6,
              marginHorizontal: 100,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              color: 'purple',
              marginBottom: 60,
              marginHorizontal: 80,
              width: 200,
            }}>
            HealSci
          </Text>
        </View>
        <Text style={styles.titleInput}>Tên Tài Khoản</Text>
        <TextInput
          style={styles.inputDesign}
          placeholder="Nhập tên tài khoản"
          onChangeText={(e)=>{setUserName(e)}}
        />
        <Text style={styles.titleInput}>Mật Khẩu</Text>
        <TextInput
          style={styles.inputDesign}
          placeholder="Nhập mật khẩu"
          secureTextEntry={true}
          onChangeText={e => {setPassword(e)}}
        />

        <TouchableOpacity onPress={onSubmit} style={styles.touchStyle}>
          <View style={styles.button}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 16,
                lineHeight: 20,
              }}>
              Đăng nhập
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '800',
  },
  inputDesign: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    borderRadius: 4,
    paddingVertical: 10,
    marginBottom: 30,
  },
  titleInput: {
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#201d34',
    padding: 10,
    borderRadius: 10,
    height: 50,
  },
  touchStyle: {
    marginTop: 30,
  },
});
