import * as uuid from 'uuid';
import * as ClipListActionTypes from './actionTypes';

const initialState = {
  isAddingClip: false,
  data: [
    {
      id: 1,
      name: 'Main Clip',
      source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
      type: 'video/mp4',
      start: '',
      end: '',
      isMain: true,
      isPlaying: true,
      isEditing: false,
    },
    {
      id: 2,
      name: 'Clip 1',
      source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
      type: 'video/mp4',
      start: '10',
      end: '20',
      isMain: false,
      isPlaying: false,
      isEditing: false,
    },
    {
      id: 3,
      name: 'Clip 2',
      source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
      type: 'video/mp4',
      start: '20',
      end: '30',
      isMain: false,
      isPlaying: false,
      isEditing: false,
    },
    {
      id: 4,
      name: 'Clip 3',
      source: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
      type: 'video/mp4',
      start: '30',
      end: '',
      isMain: false,
      isPlaying: false,
      isEditing: false,
    },
  ]
};

export default function ClipList(state = initialState, action) {
  switch (action.type) {
    case ClipListActionTypes.ADD_CLIP:
      if (
        action.payload.name.trim() !== ''
        && action.payload.start.trim() !== ''
        && action.payload.end.trim() !== ''
      ) {
        return {
          isAddingClip: false,
          data: [
            ...state.data,
            {
              ...action.payload,
              id: uuid(),
            }
          ],
        }
      } else {
        return state;
      }

    case ClipListActionTypes.REMOVE_CLIP:
      return {
        isAddingClip: false,
        data: [
          ...state.data
            .filter(clip => clip.id !== action.payload)
            .map(clip => {
              if (clip.isMain) {
                return {
                  ...clip,
                  isPlaying: true
                }
              }
              return clip;
            }),
        ]
      }

    case ClipListActionTypes.EDIT_CLIP:
      return {
        isAddingClip: false,
        data: state.data.map(clip => {
          if (clip.id === action.payload.id) {
            console.log(clip);
            return {
              ...clip,
              ...action.payload,
              isEditing: false,
              isPlaying: true
            };
          }
          return clip;
        })
      }

    case ClipListActionTypes.PLAY_CLIP:
      return {
        isAddingClip: false,
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

    case ClipListActionTypes.ENABLE_NEW_CLIP_FORM:
      return {
        ...state,
        isAddingClip: true,
        data: state.data.map(clip => {
          return {
            ...clip,
            isEditing: false
          };
        })
      }

    case ClipListActionTypes.DISABLE_NEW_CLIP_FORM:
      return {
        ...state,
        isAddingClip: false,
        data: state.data.map(clip => {
          return {
            ...clip,
            isEditing: false
          };
        })
      }

    case ClipListActionTypes.ENABLE_EDIT_CLIP_FORM:
      return {
        isAddingClip: false,
        data: state.data.map(clip => {
          if (clip.id === action.payload) {
            return {
              ...clip,
              isEditing: true
            };
          }
          return {
            ...clip,
            isEditing: false
          };
        })
      }

    case ClipListActionTypes.DISABLE_EDIT_CLIP_FORM:
      return {
        isAddingClip: false,
        data: state.data.map(clip => {
          if (clip.id === action.payload) {
            return {
              ...clip,
              isEditing: false
            };
          }
          return clip;
        })
      }

    default:
      return state;
  }
}