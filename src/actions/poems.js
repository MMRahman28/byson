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

// EDIT_POEM
export const editPoem = (id, updates) => (
    {
        type: 'EDIT_POEM',
        id,
        updates

    }
);

// SET_POEM
export const setPoem = (poems) => ({
  type: 'SET_POEM',
  poems
});
