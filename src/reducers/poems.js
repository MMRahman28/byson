import uuid from 'uuid';
//import { v4 as uuid } from 'uuid';
const poemsReducerDefaultState = [];
const randomPoems = [...Array(4)].map(() => Math.floor(Math.random() * 9));
export default (state = poemsReducerDefaultState, action) => {
    switch (action.type)
    {
        case 'ADD_POEM':
            return [...state, action.poem];

        case 'REMOVE_POEM':
            return [...state].filter((poem) => (poem.id !== action.id));
        case 'EDIT_POEM':
            return state.map((poem) => {
                if(poem.id === action.id){

                     return {
                         ...poem,
                         ...action.updates
                     }
                } else {
                    return poem;
                }
            });

        case 'SET_POEMS':
          return action.poems;
          
        // case 'SET_POEM':
        //      return [...state].filter((poem) => (randomPoems.includes(poem.id)));


        default:
            return state;
    }
};
