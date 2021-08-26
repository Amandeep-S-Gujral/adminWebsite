import firebase from 'firebase/app'
import 'firebase/auth'
import config from './serviceAccountKey.json'

firebase.initializeApp(config)
const auth = firebase.auth()

export default auth