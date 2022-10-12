import {useState, useEffect} from 'react';
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
import Menu from '../../components/Menu';

const Home = ({navigation}) => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [calo, setCalo] = useState();
  useEffect(() => {
    const initData = async () => {
      const idData = await AsyncStorage.getItem('_id');
      setId(idData);
      const nameData = await AsyncStorage.getItem('ho_ten');
      setName(nameData);
      const genderData = await AsyncStorage.getItem('gioi_tinh');
      setGender(genderData);
      const weightData = await AsyncStorage.getItem('can_nang');
      setWeight(weightData);
      const heightData = await AsyncStorage.getItem('chieu_cao');
      setHeight(heightData);
      const ageData = await AsyncStorage.getItem('tuoi');
      setAge(ageData);
      const caloData = await AsyncStorage.getItem('calo_muc_tieu');
      setCalo(caloData);
    };
	initData()
  }, []);
  return (
    <View>
      <View
        style={{
          backgroundColor: '#aac1eea1',
          width: '100%',
          height: 60,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 12,
        }}>
        <Image
          source={require('../../img/logo.png')}
          style={{
            width: 60,
            height: 60,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: 'purple',
          }}>
          HealSci
        </Text>

        <Menu style={{marginLeft: 100}} title={name} navigation={navigation}/>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
		  padding:12
        }}>
        <Text>Họ tên: {name}</Text>
        <Text>Giới tính: {gender}</Text>
        <Text>Tuổi: {age}</Text>
        <Text>Chiều cao: {height}</Text>
        <Text>Cân nặng: {weight}</Text>
        <Text>Calo mục tiêu: {calo}</Text>
      </View>
    </View>
  );
};

export default Home;
