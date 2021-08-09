import Container from '../container'

import contentListDispatcherFactory from '../dispatcher/contentListDispatcher'
import apiRequestModelFactory from '../model/apiRequestModel'
import {configFactory} from '../config'

import ContentDetailForm from '../components/contentManagement/ContentDetailForm'
import ContentListTable from '../components/contentManagement/ContentListTable'
import WithContentList from '../components/contentManagement/WithContentList'

const container = new Container()

container.setInternalModule('contentListDispatcher', contentListDispatcherFactory)
container.setModel('apiRequestModel', apiRequestModelFactory)
container.setModel('config', configFactory)

container.setComponent('ContentListTable', ContentListTable)
container.setComponent('ContentDetailForm', ContentDetailForm)

const ContentManagement = WithContentList(container.getContainer())

export default ContentManagement