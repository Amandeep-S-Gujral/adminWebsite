import Container from "../container";

import { configFactory } from "../config";
import apiRequestModelFactory from "../model/apiRequestModel";

import {parserFactory} from '../utils/parser'
import contentBodyDispacherFactory from "../dispatcher/contentBodyDispatcher";
import { authDispatcherFactory } from "../dispatcher/authDispatcher";

import { Link } from 'react-router-dom'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import auth from "../firebase";
import Cookies from "universal-cookie/es6";

import HeaderWithNav from '../components/header/HeaderWithNav'
import NavMenu from '../components/header/NavMenu'
import ContentEditorToolBar from '../components/contentEditor/ContentEditorToolBar'
import TextEditor from "../components/contentEditor/TextEditor";
import Loading from '../components/notifier/Loading'
import MetaTagForm from "../components/contentEditor/MetaTagForm";
import DetailForm from "../components/contentEditor/DetailForm";
import StoreForm from "../components/contentEditor/StoreForm";
import WithContentBody from "../components/contentEditor/WithContentBody";

const container = new Container()
const cookies = new Cookies()

container.setModel('config', configFactory)
container.setModel('apiRequestModel', apiRequestModelFactory)

container.setInternalModule('parser', parserFactory)
container.setInternalModule('contentBodyDispatcher', contentBodyDispacherFactory)
container.setInternalModule('authDispatcher', authDispatcherFactory)

container.setExternalModule('Link', Link)
container.setExternalModule('Editor', Editor)
container.setExternalModule('EditorState', EditorState)
container.setExternalModule('convertToRaw', convertToRaw)
container.setExternalModule('convertFromRaw', convertFromRaw)
container.setExternalModule('auth', auth)
container.setExternalModule('cookies', cookies)

container.setComponent('ContentEditorToolBar', ContentEditorToolBar)
container.setComponent('HeaderWithNav', HeaderWithNav)
container.setComponent('NavMenu', NavMenu)
container.setComponent('TextEditor', TextEditor)
container.setComponent('Loading', Loading)
container.setComponent('MetaTagForm', MetaTagForm)
container.setComponent('DetailForm', DetailForm)
container.setComponent('StoreForm', StoreForm)

const ContentEditor = WithContentBody(container.getContainer())

export default ContentEditor