import Container from "../container";

import { configFactory } from "../config";
import apiRequestModelFactory from "../model/apiRequestModel";
import {metaDataModelFactory} from "../model/metaDataModel"

import {parserFactory} from '../utils/parser'
import contentBodyDispacherFactory from "../dispatcher/contentBodyDispatcher";

import { Link } from 'react-router-dom'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import HeaderWithNav from '../components/header/HeaderWithNav'
import NavMenu from '../components/header/NavMenu'
import ContentEditorToolBar from '../components/contentEditor/ContentEditorToolBar'
import TextEditor from "../components/contentEditor/TextEditor";
import Loading from '../components/notifier/Loading'
import MetaTagForm from "../components/contentEditor/MetaTagForm";
import WithContentBody from "../components/contentEditor/WithContentBody";

const container = new Container()

container.setModel('config', configFactory)
container.setModel('apiRequestModel', apiRequestModelFactory)
container.setModel('metaDataModel', metaDataModelFactory)

container.setInternalModule('parser', parserFactory)
container.setInternalModule('contentBodyDispatcher', contentBodyDispacherFactory)

container.setExternalModule('Link', Link)
container.setExternalModule('Editor', Editor)
container.setExternalModule('EditorState', EditorState)
container.setExternalModule('convertToRaw', convertToRaw)
container.setExternalModule('convertFromRaw', convertFromRaw)

container.setComponent('ContentEditorToolBar', ContentEditorToolBar)
container.setComponent('HeaderWithNav', HeaderWithNav)
container.setComponent('NavMenu', NavMenu)
container.setComponent('TextEditor', TextEditor)
container.setComponent('Loading', Loading)
container.setComponent('MetaTagForm', MetaTagForm)

const ContentEditor = WithContentBody(container.getContainer())

export default ContentEditor