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
import {DataTable} from 'react-native-paper';
import FoodService from '../../services/food.service';

import Menu from '../../components/Menu';
const foodService = new FoodService();

const Food = ({navigation}) => {
  const [foods, setFoods] = useState([]);
  const [name, setName] = useState();

  useEffect(() => {
    const initData = async () => {
      const foodData = await foodService.getAll();
      setFoods(foodData);
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
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>STT</DataTable.Title>
              <DataTable.Title numeric>Thực phẩm</DataTable.Title>
              <DataTable.Title numeric>Năng lượng</DataTable.Title>
            </DataTable.Header>

            {foods.map((item, index) => {
              return (
                <DataTable.Row>
                  <DataTable.Cell>{index + 1}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.ten}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.calo}</DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>
        </ScrollView>
      </View>
    </View>
  );
};

export default Food;
