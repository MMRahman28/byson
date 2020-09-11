import { v4 as uuid } from 'uuid';
import database from '../firebase/firebase';
// ADD_POEM
export const addPoem = (poem) => (
{
    type: 'ADD_POEM',
    poem

  });

export const startAddPoem = (poemData = {}) => {
  return (dispatch) => {
    const {
      note = '',
      createdAt = 0
    } = poemData;

    const poem = {note, createdAt};
  return   database.ref('poems').push(poem).then((ref) => {
      dispatch(addPoem({
        id: ref.key,
        ...poem
      }));
    });
  };
};

// REMOVE_POEM

export const removePoem = ({id} = {}) => (
  {
      type: 'REMOVE_POEM',
      id
  }

);

export const startRemovePoem = ({id} = {}) => {
  return (dispatch) => {
    return database.ref(`poems/${id}`).remove().then(() => {
      dispatch(removePoem( { id }));
    });
  };
};

// EDIT_POEM
export const editPoem = (id, updates) => (
    {
        type: 'EDIT_POEM',
        id,
        updates

    }
);

export const startEditPoem = (id, updates) => {
  return (dispatch) => {
    return database.ref(`poems/${id}`).update(updates).then(() => {
      dispatch(editPoem(id, updates));
    });
  }
};

// SET_POEMS
export const setPoems = (poems) => ({
  type: 'SET_POEMS',
  poems
})

// Fetch all poem data once
// Parse that data into an array
// Dispatch SET_EXPENSES

export const startSetPoems = () => {
  return (dispatch) => {
    return database.ref('poems').once('value').then((snapshot) => {
      const poems = [];
      snapshot.forEach((childSnapshot) => {

              poems.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
              });

      });
      dispatch(setPoems(poems));
    });

  };
};
