import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddPoem, addPoem, editPoem, removePoem } from '../../actions/poems';
import poems from '../fixtures/poems';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove poem action object', () => {
  const action = removePoem({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_POEM',
    id: '123abc'
  });

});

test('should setup edit poem action object', () => {
  const action = editPoem('123ad', {note: 'new poem value'});
  expect(action).toEqual({
    type: 'EDIT_POEM',
    id:'123ad',
    updates:{
      note:'new poem value'
    }
  });
});

test('should setup add poem action object with provided values', () => {

  const action = addPoem(poems[2]);
  expect(action).toEqual({
    type: 'ADD_POEM',
    poem: poems[2]
  });
});

test('should add poem to database and store', (done) => {
  const store = createMockStore({});
  const poemData = {
    note: 'A mockStore poem',
    createdAt: 234
  }
  store.dispatch(startAddPoem(poemData)).then(() => {
     const action = store.getActions();
     expect(action[0]).toEqual({
       type: 'ADD_POEM',
       poem: {
         id: expect.any(String),
         ...poemData
       }
  });
  
  return  database.ref(`poems/${action[0].poem.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(poemData);
    done();
  });

});

test('should add poem with defaults to database and store', (done) => {
  const store = createMockStore({});
  const poemDefaults = {
    note: '',
    createdAt: 0
  }
  store.dispatch(startAddPoem({})).then(() => {
     const action = store.getActions();
     expect(action[0]).toEqual({
       type: 'ADD_POEM',
       poem: {
         id: expect.any(String),
         ...poemDefaults
       }
     });
  return  database.ref(`poems/${action[0].poem.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(poemDefaults);
    done();
  });
});

// test('should setup add poem action object with default values', () => {
//  const action = addPoem();
//  expect(action).toEqual({
//    type: 'ADD_POEM',
//    poem: {
//      id: expect.any(String),
//      note: '',
//      createdAt: 0
//    }
//  });
//
// });
