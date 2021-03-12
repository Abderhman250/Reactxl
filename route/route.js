import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-native-router-flux';
import HomeScreen from "./src/screens/HomeScreen";
import SingUp from "./src/screens/SingUp";
class route extends React.Component{

render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login"/>
          <Scene key="register" component={Register} title="Register"/>
          <Scene key="home" component={Home}/>
        </Scene>
      </Router>
    );
  }
}


export default route;