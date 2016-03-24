import React from 'react-native';
import ReactRouter, { Actions, Scene, Modal } from 'react-native-router-flux';
import ScreenOne from "../components/screen-one";
import ScreenTwo from "../components/screen-two";
import TabIcon from '../components/tab-icon';

module.exports = Actions.create(
		<Scene key="tabbar" tabs={true} default="tab1" >
			<Scene key="tab1"  initial={true} component={ ScreenOne } title="One" icon={TabIcon} />
			<Scene key="tab2"  component={ ScreenTwo } title="Two" icon={TabIcon} />
    </Scene>
)
