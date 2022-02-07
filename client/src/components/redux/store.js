import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'components/redux/userSlice';
import customersReducer from 'components/redux/customersSlice';
import locationsReducer from 'components/redux/locationsSlice';
import friendsReducer from 'components/redux/friendsSlice';
import errorsReducer from 'components/redux/errorsSlice';
import stepperReducer from 'components/redux/stepperSlice';
import rssfeedsReducer from 'components/redux/rssSlice';
import rssitemsReducer from 'components/redux/rssItemsSlice';
import { apiSlice } from 'components/redux/apiSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    locations: locationsReducer,
    friends: friendsReducer,
    errors: errorsReducer,
    stepper: stepperReducer,
    customers: customersReducer,
    rssfeeds: rssfeedsReducer,
    rssitems: rssitemsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})
