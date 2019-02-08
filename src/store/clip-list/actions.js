import * as ClipListActionTypes from './actionTypes';

export const addClip = clip => ({
  type: ClipListActionTypes.ADD_CLIP,
  payload: clip
});

export const removeClip = clipId => ({
  type: ClipListActionTypes.REMOVE_CLIP,
  payload: clipId
});

export const editClip = updates => ({
  type: ClipListActionTypes.EDIT_CLIP,
  payload: updates
});

export const playClip = clipId => ({
  type: ClipListActionTypes.PLAY_CLIP,
  payload: clipId
});

export const enableNewClipForm = () => ({
  type: ClipListActionTypes.ENABLE_NEW_CLIP_FORM
});

export const disableNewClipForm = () => ({
  type: ClipListActionTypes.DISABLE_NEW_CLIP_FORM
});

export const enableEditClip = clipId => ({
  type: ClipListActionTypes.ENABLE_EDIT_CLIP_FORM,
  payload: clipId
});

export const disableEditClip = clipId => ({
  type: ClipListActionTypes.DISABLE_EDIT_CLIP_FORM,
  payload: clipId
});