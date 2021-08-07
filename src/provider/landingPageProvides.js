import Container from '../container'

import {configFactory} from '../config'
import Attributes from '../components/landingPage/Attributes'
import AttributeList from '../components/landingPage/AttributeList'
import SignIn from '../components/signIn/SignIn'
import SignInBox from '../components/signIn/SignInBox'
import Header from '../components/header/Header'

import WithAttributeData from '../components/landingPage/WithAttributeData'

const container = new Container()

container.setModel('config', configFactory)

container.setComponent('Attributes', Attributes)
container.setComponent('AttributeList', AttributeList)
container.setComponent('SignIn', SignIn)
container.setComponent('SignInBox', SignInBox)
container.setComponent('Header', Header)

const LandingPage = WithAttributeData(container.getContainer())

export default LandingPage