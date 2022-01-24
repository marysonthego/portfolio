import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'components/dashboard/redux/userSlice';
import customersReducer from 'components/dashboard/redux/customersSlice';
import locationsReducer from 'components/dashboard/redux/locationsSlice';
import friendsReducer from 'components/dashboard/redux/friendsSlice';
import errorsReducer from 'components/dashboard/redux/errorsSlice';
import stepperReducer from 'components/dashboard/redux/stepperSlice';
import rssfeedsReducer from 'components/dashboard/redux/rssSlice';
import rssitemsReducer from 'components/dashboard/redux/rssItemsSlice';
import { apiSlice } from 'components/dashboard/redux/apiSlice';

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
