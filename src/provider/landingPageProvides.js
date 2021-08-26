import Container from '../container'

import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'
import auth from '../firebase'

import { authDispatcherFactory } from '../dispatcher/authDispatcher'
import {configFactory} from '../config'
import Attributes from '../components/landingPage/Attributes'
import AttributeList from '../components/landingPage/AttributeList'
import SignInBox from '../components/signIn/SignInBox'
import Header from '../components/header/Header'

import WithAttributeData from '../components/landingPage/WithAttributeData'

const container = new Container()
const cookies = new Cookies()

container.setModel('config', configFactory)

container.setExternalModule('Link', Link)
container.setExternalModule('auth', auth)
container.setExternalModule('cookies', cookies)

container.setInternalModule('authDispatcher', authDispatcherFactory)

container.setComponent('Attributes', Attributes)
container.setComponent('AttributeList', AttributeList)
container.setComponent('SignInBox', SignInBox)
container.setComponent('Header', Header)

const LandingPage = WithAttributeData(container.getContainer())

export default LandingPage