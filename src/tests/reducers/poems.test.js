import poemsReducer from '../../reducers/poems';
import poems from '../fixtures/poems';

test('should set default state', ()  => {
  const state = poemsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove poem by id', () => {
  const action = {
    type: 'REMOVE_POEM',
    id: poems[1].id
  };
  const state = poemsReducer(poems, action);
  expect(state).toEqual([poems[0], poems[2],poems[3],poems[4]]);
});

test('should not remove poem by id not found', () => {
  const action = {
    type: 'REMOVE_POEM',
    id: '-1'
  };
  const state = poemsReducer(poems, action);
  expect(state).toEqual(poems);
});

test('should add a poem', () => {
  const poem = {
    id: '200',
    note: 'A poem of test',
    createdAt: 1111111
  };

  const action = {
    type: 'ADD_POEM',
    poem
  };
  const state = poemsReducer(poems, action);
  expect(state).toEqual([...poems, poem]);
});

test('should edit a poem', () => {
  const note = 'A poem of edit';
  const action = {
    type: 'EDIT_POEM',
    id: poems[1].id,
    updates: {
      note
    }
  };
  const state = poemsReducer(poems, action);
  expect(state[1].note).toBe(note);
});

test('should not edit a poem if poem not found', () => {
  const note = 'A poem of edit whose id is not found';
  const action = {
    type: 'EDIT_POEM',
    id: '-1',
    updates: {
      note
    }
  };
  const state = poemsReducer(poems, action);
  expect(state).toEqual(poems);
});

test('should set poems', () => {
  const action = {
    type: 'SET_POEMS',
    poems: [poems[1]]
  };
  const state = poemsReducer(poems, action);
  expect(state).toEqual([poems[1]]);
});
