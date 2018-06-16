import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body, List, Icon} from 'native-base';
import ScreenHeader from '../Components/ScreenHeader';
import ValidateButton from '../Components/ValidateButton';
import SideBar from '../Components/SideBar';

const styles = {
  view1: {
    flex: 1,
    flexDirection: 'row'
  },
  view2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view4: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonView: {
    flexDirection: 'row',
    marginLeft: '60%'
  },
  colorPurple: {
    color: '#5f4b8b',
    fontSize: 15
  },
  colorOrange: {
    color: '#fd7d01',
    fontSize: 15
  },
  icon: {
    fontSize: 40,
    color: '#5f4b8b'
  }
};
export default class NotificationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        {
          name: 'Guilherme',
          currentDay: '2018-04-28',
          currentStartTime: '10:30',
          currentEndTime: '12:00',
          requestDay: '2018-05-12',
          requestStartTime: '10:30',
          requestEndTime: '12:00'
        },{
          name: 'Ezequiel',
          currentDay: '2018-04-28',
          currentStartTime: '10:30',
          currentEndTime: '12:00',
          requestDay: '2018-03-30',
          requestStartTime: '10:30',
          requestEndTime: '12:00'
        }
      ]
    };
  }

  renderCard(item) {
    return (
      <Card>
      <CardItem header><Text><Text style={styles.colorPurple}>{item.name}</Text> solicitou mudança com o seu horário</Text></CardItem>
        <CardItem>
          <Body>
            <View style={styles.view1}>
              <View style={styles.view2}>
                <Text>Seu Horário</Text><Text>{item.currentDay}</Text><Text>{item.currentStartTime} - {item.currentEndTime}</Text>
              </View>
              <View style={styles.view3}><Icon name='md-arrow-dropright' style={styles.icon} /></View>
              <View style ={styles.view4}>
                <Text>{item.name}</Text><Text>{item.requestDay}</Text><Text>{item.requestStartTime} - {item.requestEndTime}</Text>
              </View>
            </View>
          </Body>
        </CardItem>
        <CardItem footer>
        <View style={styles.buttonView}>
          <ValidateButton text='Recusar' textStyle={styles.colorOrange}/>
          <ValidateButton text='Aceitar' textStyle={styles.colorPurple}/>
        </View>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <SideBar />
        <Container style={{flex: 8}}>
          <ScreenHeader
            title = 'Notificações'
          />
          <Content>
            <List dataArray={this.state.notifications}
              renderRow={(item) => (
                this.renderCard(item)
                )
              } />
          </Content>
        </Container>
      </View>
    );
  }
}
