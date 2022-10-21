import Blob from './Blob.js'
import File from './File.js'
import XMLHttpRequest from './XMLHttpRequest.js'
import ProgressEvent from './ProgressEvent'
import Event from './Event'
import FileReader from './FileReader'
import Fetch from './Fetch'

import {NativeModules} from 'react-native';
const RNFetchBlob = NativeModules.RNFetchBlob

export default {
  Blob, File, XMLHttpRequest, ProgressEvent, Event, FileReader, Fetch
}
