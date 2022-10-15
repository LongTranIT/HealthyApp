import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const MyCard = ({title,content,imgURL}) => (
  <Card>
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{content}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: imgURL }} />
    <Card.Actions>
      <Button>Xem</Button>
      <Button>Thêm</Button>
    </Card.Actions>
  </Card>
);
export default MyCard