import { configureStore } from '@reduxjs/toolkit';
import contactsReducers from './contacts/contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
});
