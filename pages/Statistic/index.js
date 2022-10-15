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
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

import Menu from '../../components/Menu';
import StatisticService from '../../services/statistic.service';
const statisticService = new StatisticService();

const Statistic = ({navigation}) => {
  const dataDefault = {
    labels: ['January'],
    datasets: [
      {
        data: [20],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Rainy Days'], // optional
  };
  const [statistics, setStatistics] = useState(dataDefault);
  const [statisticsWeight, setStatisticsWeight] = useState(dataDefault);
  const [name, setName] = useState();
  const today = new Date().toDateString();
  useEffect(() => {
    const initData = async () => {
      const id = await AsyncStorage.getItem('_id');
      const nameData = await AsyncStorage.getItem('ho_ten');
      setName(nameData);
      const caloData = await AsyncStorage.getItem('calo_muc_tieu');
      const weightData = await AsyncStorage.getItem('can_nang_muc_tieu');
      const statisticsData = await statisticService.getByRange({
        idNguoiDung: id,
        startDate: new Date(new Date().setDate(1)),
        endDate: new Date(today),
      });
      const data = {
        labels: statisticsData?.map(item =>
          new Date(item?.ngay).toLocaleDateString('vi-VN'),
        ),
        datasets: [
          {
            data: statisticsData?.map(item => item?.calo_nap),
            color: () => 'rgb(255, 99, 132)',
          },
          {
            data: statisticsData?.map(item => item?.calo_tieu),
            color: () => 'rgb(53, 162, 235)',
          },
          {
            data: statisticsData?.map(item => Number.parseInt(caloData)),
            color: () => '#5eba7d',
          },
        ],
        legend: ['Calo Nạp', 'Calo Tiêu', 'Calo Mục Tiêu'], // optional
      };
      setStatistics(data);
      const dataWeight = {
        labels: statisticsData?.map(item =>
          new Date(item?.ngay).toLocaleDateString('vi-VN'),
        ),
        datasets: [
          {
            data: statisticsData?.map(item => item?.can_nang?item?.can_nang:weightData),
            color: () => '#5eba7d',
          },
          {
            data: statisticsData?.map(item => weightData),
            color: () => 'rgb(53, 162, 235)',
          },
          {
            data: statisticsData?.map(item => 0),
            color: () => '#753a88',
          },
          {
            data: statisticsData?.map(item => 100),
            color: () => '#753a88',
          },
        ],
        legend: ['Cân Nặng Mục Tiêu', 'Cân Nặng Hiện Tại'], // optional
      };
      setStatisticsWeight(dataWeight);
      console.log(typeof statisticsData[0].can_nang);
    };
    initData();
  }, []);


  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#1482b5',
    backgroundGradientTo: '#063970',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    decimalPlaces: 0,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };
  const chartWeightConfig = {
    backgroundColor: '#ccc',
    backgroundGradientFrom: '#cc2b5e  ',
    backgroundGradientTo: '#753a88',
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    decimalPlaces: 0,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

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
      <Text
        style={{
          fontSize: 20,
          color: 'purple',
          textAlign:'center'
        }}>
        Biểu đồ thống kê theo calo trong tháng {(new Date()).getMonth()+1}
      </Text>
      <View>
        <LineChart
          data={statistics}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          yAxisSuffix="Kcl"
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          color: 'purple',
          textAlign:'center'
        }}>
        Biểu đồ thống kê theo cân nặng trong tháng {(new Date()).getMonth()+1}
      </Text>
      <View>
        <LineChart
          data={statisticsWeight}
          width={screenWidth}
          height={220}
          chartConfig={chartWeightConfig}
          yAxisSuffix="Kg"
        />
      </View>
    </View>
  );
};

export default Statistic;
