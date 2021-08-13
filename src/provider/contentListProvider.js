import Container from '../container'

import contentListDispatcherFactory from '../dispatcher/contentListDispatcher'
import apiRequestModelFactory from '../model/apiRequestModel'
import {configFactory} from '../config'
import {parserFactory} from '../modifier/parser'

import { Link } from 'react-router-dom'

import HeaderWithNav from '../components/header/HeaderWithNav'
import NavMenu from '../components/header/NavMenu'
import ContentDetailForm from '../components/contentManagement/ContentDetailForm'
import ContentListTable from '../components/contentManagement/ContentListTable'
import WithContentList from '../components/contentManagement/WithContentList'

const container = new Container()

container.setInternalModule('contentListDispatcher', contentListDispatcherFactory)
container.setModel('apiRequestModel', apiRequestModelFactory)
container.setModel('config', configFactory)
container.setModel('parser', parserFactory)
container.setExternalModule('Link', Link)

container.setComponent('ContentListTable', ContentListTable)
container.setComponent('ContentDetailForm', ContentDetailForm)
container.setComponent('HeaderWithNav', HeaderWithNav)
container.setComponent('NavMenu', NavMenu)

const ContentManagement = WithContentList(container.getContainer())

export default ContentManagement