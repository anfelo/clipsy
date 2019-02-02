import * as uuid from 'uuid';
import * as ClipListActionTypes from './actionTypes';

const initialState = {
  data: [
    {
      id: 1,
      name: 'Main Clip',
      source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
      type: 'video/mp4',
      start: '',
      end: '',
      isMain: true,
      isPlaying: true
    },
    {
      id: 2,
      name: 'Clip 1',
      source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
      type: 'video/mp4',
      start: '10',
      end: '20',
      isMain: false,
      isPlaying: false
    },
    {
      id: 3,
      name: 'Clip 2',
      source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
      type: 'video/mp4',
      start: '20',
      end: '30',
      isMain: false,
      isPlaying: false
    },
    {
      id: 4,
      name: 'Clip 3',
      source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
      type: 'video/mp4',
      start: '30',
      end: '',
      isMain: false,
      isPlaying: false
    },
  ]
};

export default function ClipList(state = initialState, action) {
  switch (action.type) {
    case ClipListActionTypes.ADD_CLIP:
      return {
        data: [
          ...state.data,
          {
            id: uuid(),
            ...action.payload
          }
        ],
      }

    case ClipListActionTypes.REMOVE_CLIP:
      return {
        data: state.data.filter(clip => clip.id !== action.payload)
      }

    case ClipListActionTypes.EDIT_CLIP:
      return {
        data: state.data.map(clip => {
          if (clip.id === action.payload.id) {
            return {
              ...clip,
              ...action.payload
            };
          }
          return clip;
        })
      }

    case ClipListActionTypes.PLAY_CLIP:
      return {
        data: state.data.map(clip => {
          if (clip.id === action.payload) {
            return {
              ...clip,
              isPlaying: true
            };
          }
          return {
            ...clip,
            isPlaying: false
          };
        })
      }

    default:
      return state;
  }
}