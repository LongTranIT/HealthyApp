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
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Menu from '../../components/Menu';
import Card from '../../components/Card';
import MenuService from '../../services/menu.service';
const menuService = new MenuService();

const MenuFood = ({navigation}) => {
  const [menus, setMenus] = useState([]);
  const [name, setName] = useState();
  useEffect(() => {
    const initData = async () => {
      const menuData = await menuService.getAll();
      setMenus(menuData);
      const nameData = await AsyncStorage.getItem('ho_ten');
      setName(nameData);
    };
    initData();
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

        <Menu style={{marginLeft: 100}} title={name} navigation={navigation} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 12,
        }}>
        <ScrollView>
         {menus?.map(menu =>{
          return  <Card title={menu?.ten} content={menu?.mo_ta} imgURL={menu?.hinh} key={menu['_id']}/>
         })}
        </ScrollView>
      </View>
    </View>
  );
};

export default MenuFood;
