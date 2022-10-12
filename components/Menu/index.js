import React, {useState} from 'react';

import { View, Text } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

export default function MyMenu({title, navigation}) {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const handleLogout=()=>{
    navigation.replace('Login')
  }
  const handleGoFoodPage=()=>{
    navigation.replace('Food')
  }
  const handleGoHomePage=()=>{
    navigation.replace('Home')
  }

  return (
    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Menu
        visible={visible}
        anchor={<Text onPress={showMenu}>{title}</Text>}
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={
          handleGoHomePage
        }>Trang chủ</MenuItem>
        <MenuItem onPress={
          handleGoFoodPage
        }>Danh mục thực phẩm</MenuItem>
        <MenuItem onPress={hideMenu}>Thống kê</MenuItem>
        <MenuDivider />
        <MenuItem onPress={handleLogout}>Đăng xuất</MenuItem>
      </Menu>
    </View>
  );
}