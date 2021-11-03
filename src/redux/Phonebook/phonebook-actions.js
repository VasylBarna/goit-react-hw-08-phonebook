import { createAction } from '@reduxjs/toolkit';
import types from './phonebook-types';

export const handleFilter = createAction(types.FILTER);
