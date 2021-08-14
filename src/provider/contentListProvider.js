import Container from '../container'

import contentListDispatcherFactory from '../dispatcher/contentListDispatcher'
import apiRequestModelFactory from '../model/apiRequestModel'
import {configFactory} from '../config'
import {parserFactory} from '../modifier/parser'
import { contentListModelFactory } from '../model/contentListModel'

import { Link } from 'react-router-dom'

import HeaderWithNav from '../components/header/HeaderWithNav'
import ToolBar from '../components/toolBar/ToolBar'
import NavMenu from '../components/header/NavMenu'
import ContentListForm from '../components/contentManagement/ContentListForm'
import ContentListTable from '../components/contentManagement/ContentListTable'
import WithContentList from '../components/contentManagement/WithContentList'

const container = new Container()

container.setInternalModule('contentListDispatcher', contentListDispatcherFactory)
container.setModel('apiRequestModel', apiRequestModelFactory)
container.setModel('config', configFactory)
container.setModel('parser', parserFactory)
container.setModel('contentListModel', contentListModelFactory)
container.setExternalModule('Link', Link)

container.setComponent('ContentListTable', ContentListTable)
container.setComponent('ContentListForm', ContentListForm)
container.setComponent('HeaderWithNav', HeaderWithNav)
container.setComponent('NavMenu', NavMenu)
container.setComponent('ToolBar', ToolBar)
console.log(container.getContainer())

const ContentManagement = WithContentList(container.getContainer())

export default ContentManagement