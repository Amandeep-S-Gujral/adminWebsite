import Container from '../container'

import contentListDispatcherFactory from '../dispatcher/contentListDispatcher'
import apiRequestModelFactory from '../model/apiRequestModel'
import {configFactory} from '../config'
import {parserFactory} from '../utils/parser'
import { contentListModelFactory } from '../model/contentListModel'
import { authDispatcherFactory } from '../dispatcher/authDispatcher'

import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'
import auth from '../firebase'

import HeaderWithNav from '../components/header/HeaderWithNav'
import ToolBar from '../components/toolBar/ToolBar'
import NavMenu from '../components/header/NavMenu'
import ContentListForm from '../components/contentManagement/ContentListForm'
import ContentListTable from '../components/contentManagement/ContentListTable'
import Loading from '../components/notifier/Loading'
import Error from '../components/notifier/Error'
import WithContentList from '../components/contentManagement/WithContentList'

const container = new Container()
const cookies = new Cookies()

container.setInternalModule('contentListDispatcher', contentListDispatcherFactory)
container.setInternalModule('parser', parserFactory)
container.setInternalModule('authDispatcher', authDispatcherFactory)

container.setExternalModule('Link', Link)
container.setExternalModule('auth', auth)
container.setExternalModule('cookies', cookies)

container.setModel('apiRequestModel', apiRequestModelFactory)
container.setModel('config', configFactory)
container.setModel('contentListModel', contentListModelFactory)

container.setComponent('ContentListTable', ContentListTable)
container.setComponent('ContentListForm', ContentListForm)
container.setComponent('HeaderWithNav', HeaderWithNav)
container.setComponent('NavMenu', NavMenu)
container.setComponent('ToolBar', ToolBar)
container.setComponent('Loading', Loading)
container.setComponent('Error', Error)

const ContentManagement = WithContentList(container.getContainer())

export default ContentManagement