# RTK Query with Alerts-Dashboard

- Fetches data from the server
- Caches data Client-side in Redux store
- API endpoints include how to generate query parameters from arguments and transform responses for caching
- Generates react hooks that encapsulate fetching and manage the lifetime of cached data as components mount and unmount
- Allows streaming cache updates via websocket messages after fetching initial data (not implemented here)

## createApi()
- You need one per app. One API slice per base URL.
- Defines sets of database endpoints.
- Describes how to retrieve data from an endpoint series.
- Configures how to fetch and transform data.

## fetchBaseQuery()
- A small `fetch` wrapper that simplifies requests.

# apiSlice.js
## createApi
- auto-generates a Redux slice reducer (named apiSlice)
- creates a custom middleware to manage subscription lifetimes (named apiSlice)"
## endpoints
- In **apiSlice.js** build endpoints for every query and mutation to the **baseUrl**,
## export hooks
- export the auto-generated hooks that were created for each endpoint.
- Hooks are always named **use[*endpoint_name*][Query or Mutation]**

```javascript {.line-numbers}
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',  //all data will be in Redux store at store.apiSlice

  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),tagTypes: ['User', 'Locations', 'Friends', 'Customers'],
  keepUnusedDataFor: 5,

  endpoints: builder => ({

    listCustomers: builder.query({
      //query is a call to '${baseUrl}/listcustomers'
      query: () => ({
      url: '/listcustomers',
      providesTags: ['Customers'],
      }),
    }),

    getCustomerByCustid: builder.query({
      query: custid => ({
          url: `/getcustomerbycustid/${custid}`,
          providesTags: (result, error, custid) => [{ type: 'User', custid }],
      }),
    }),

    checkCustomerEmail: builder.query ({
      query: (arg) => {
        const {custid, email} = arg;
        return {
        url: `/checkemail`,
        params: { custid, email },
        };
      },
    }),

    checkCustomerCell: builder.query ({
      query: (arg) => {
        const {custid, cell} = arg;
        return {
        url: `/checkcell`,
        params: { custid, cell },
      };
    },
    }),

    addCustomer: builder.mutation({
      query: newUser => ({
        url: '/addcustomer',
        method: 'POST',
        body: newUser
      }),
      invalidatesTags: ['User', 'Customers']
    }),

    updateCustomer: builder.mutation({
      query: initialUser => ({
        url: '/updatecustomer',
        method: 'POST',
        body: initialUser
      }),
      invalidatesTags: ['User', 'Customers']
    }),

    deleteCustomer: builder.mutation({
      query: (custid) => ({
        url: `/deletecustomer/${custid}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Customers']
    }),

    addLocation: builder.mutation({
      query: newLocation => ({
        url: '/addsubscription',
        method: 'POST',
        body: newLocation
      }),
      invalidatesTags: ['Locations']
    }),

    findDuplicateLocation: builder.mutation({
      query: newLocation => ({
        url: '/findduplicatesubscription',
        method: 'POST',
        body: newLocation
      }),
      invalidatesTags: ['Locations']
    }),

    updateLocation: builder.mutation({
      query: newLocation => ({
        url: '/updatesubscription',
        method: 'POST',
        body: newLocation
      }),
      invalidatesTags: [{type: 'Locations', id: 5}, 'Locations']
    }),

    deleteLocation: builder.mutation({
      query: (id) => ({
        url: `/deletesubscription/${id}`,
        method: 'DELETE',
      invalidatesTags: [{type: 'Locations', id: 'LOCSBYCUSTID'}],
    }),
  }),

    getLocationById: builder.query({
      query: id => ({
        url: `/getlocationbyid/${id}`,
      providesTags:((id) => ({type: 'Locations', id })),
      }),
    }),

    getLocationsByCustid: builder.query({
      query: custid => ({
        url: `/getlocationsbycustid/${custid}`,
        providesTags: [{type: 'Locations', id: 'LOCSBYCUSTID'}],
      }),
    }),

    addFriend: builder.mutation({
      query: newFriend => ({
        url: '/addfriend',
        method: 'POST',
        body: newFriend
      }),
      invalidatesTags: ['Friends']
    }),

    findDuplicateFriend: builder.mutation({
      query: newFriend => ({
        url: '/findduplicatefriend',
        method: 'POST',
        body: newFriend
      }),
      invalidatesTags: ['Friends']
    }),

    updateFriend: builder.mutation({
      query: newFriend => ({
        url: '/updatefriend',
        method: 'POST',
        body: newFriend
      }),
      invalidatesTags: ['Friends']
    }),

    deleteFriend: builder.mutation({
      query: (id) => ({
        url: `/deletefriend/${id}`,
        method: 'DELETE',
        invalidatesTags: ['Friends'],
      }),
    }),

    getFriendsByCustid: builder.query({
      query: custid => ({
      url: `/getfriendsbycustid/${custid}`,
      providesTags: [{type: 'Friends', custid}]
      }),
    }),

    getZip: builder.query ({
      query: (arg) => {
        const {city, st} = arg;
        return {
        url: `/getzip`,
        params: { city, st },
      };
    },
    }),

    findZip: builder.mutation({
      query: newLocation => ({
        url: `/findzip`,
        method: `POST`,
        body: newLocation
      }),
    })

  })
});
//auto-generated hooks for each endpoint.
//These hooks encapsulate the process of triggering a request
//when a component mounts, and re-rendering the component
//as the request is processed and data is available. We can export
//these hooks out of the API slice file for use in our React components.
export const {
  useListCustomersQuery,
  useGetCustomerByCustidQuery,
  useAddCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
  useCheckCustomerEmailQuery,
  useCheckCustomerCellQuery,

  useGetLocationsByCustidQuery,
  useGetLocationByIdQuery,
  useAddLocationMutation,
  useFindDuplicateLocationMutation,
  useUpdateLocationMutation,
  useDeleteLocationMutation,

  useGetZipQuery,
  useFindZipMutation,

  useGetFriendsByCustidQuery,
  useAddFriendMutation,
  useFindDuplicateFriendMutation,
  useUpdateFriendMutation,
  useDeleteFriendMutation,
} = apiSlice;
```

## create the Redux Store in store.js
- Add the generated apiSlice reducer as a top-level slice
```
[apiSlice.reducerPath]: apiSlice.reducer
```
- Add the apiSlice middleware. It enables caching, invalidation, polling, etc.
```
middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
```
- Optionally, add **setupListeners**. Needed if you want to **refetchOnFocus** or **refetchOnReconnect**.
```
setupListeners(store.dispatch)
```
# store.js
```
import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'app/redux/userSlice';
import customersReducer from 'app/redux/customersSlice';
import locationsReducer from 'app/redux/locationsSlice';
import friendsReducer from 'app/redux/friendsSlice';
import errorsReducer from 'app/redux/errorsSlice';
import stepperReducer from 'app/redux/stepperSlice';
import rssfeedsReducer from 'app/redux/rssSlice';
import rssitemsReducer from 'app/redux/rssItemsSlice';
import { apiSlice } from 'app/redux/apiSlice';

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
```
# index.js
- In **index.js** wrap the entire app in a Redux provider.

```
import store from 'app/redux/store'
import { Provider } from 'react-redux'
...
ReactDOM.render(
  <CookiesProvider>
    <Provider store={ store }>
      <Router>
        <MetronicI18nProvider>
          <MetronicLayoutProvider>
            <MetronicSubheaderProvider>
              <MetronicSplashScreenProvider>
                <App basename={ PUBLIC_URL } />
              </MetronicSplashScreenProvider>
            </MetronicSubheaderProvider>
          </MetronicLayoutProvider>
        </MetronicI18nProvider>
      </Router>
    </Provider>
  </CookiesProvider>,
  document.getElementById("root")
);
```
# userSlice.js
- Create a separate *slice* file for each object type you want to store in Redux.
- This defines the shape of your Redux store and its
- reducers / action creators.
- It auto-generates *select* functions for each reducer.
- You need to export the *select* functions you'll use to query the Store.

```
import { createSlice } from '@reduxjs/toolkit';
import { initUser } from 'app/helpers/Initializers';

const data = {...initUser};

const initialState = {
   user: {...data},
 };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    updateUserState: (state, action) => {
      const {isLoggedIn, custid, firstname, lastname, email, cell, addr1, addr2, city, st, zip, usertype } = action.payload;
      const existingUser = state.user;
      if (existingUser) {
        if(isLoggedIn) existingUser.isLoggedIn = isLoggedIn;
        if(custid) existingUser.custid = custid;
        if(firstname) existingUser.firstname = firstname;
        if(lastname) existingUser.lastname = lastname;
        if(email) existingUser.email = email;
        if(cell) existingUser.cell = cell;
        if(addr1) existingUser.addr1 = addr1;
        if(addr2) existingUser.addr2 = addr2;
        if(city) existingUser.city = city;
        if(st) existingUser.st = st;
        if(zip) existingUser.zip = zip;
        if(usertype) existingUser.usertype = usertype;
      }
    },

    updateCustidState: (state, action) => {
      const{affectedRows, fieldCount, info, insertId, serverStatus, warningStatus} = action.payload;
      console.log(`action.payload: `,action.payload);
      let custid = insertId;
      const existingUser = state.user;
      if(existingUser) {
        existingUser.custid = custid;
      }
    },

    updateIsLoggedInState: (state, action) => {
      const{isLoggedIn} = action.payload;
      const existingUser = state.user;
      if(existingUser){
        if(isLoggedIn)
          existingUser.isLoggedIn = isLoggedIn;
      }
    },

  resetUserState: (state, action) => {
    return initialState;
  },
}

});

// Action creators generated for each reducer function
export const { addNewCustidState, updateUserState, updateCustidState, updateIsLoggedInState, resetUserState } = userSlice.actions;

export default userSlice.reducer;

// Export the auto-generated select functions
export const selectCurrentUser = state => state.user.user;
export const selectUserEmail = state => state.user.user.email;
export const selectUserCell = state => state.user.user.cell;
export const selectUserCustid = state => state.user.user.custid;
```
# Initializers.js
- is a file of JSON data initializers
```
...
export const initUser = {
    isLoggedIn: 0,
    custid: 0,
    firstname: '',
    lastname: '',
    email: '',
    cell: '',
    addr1: '',
    addr2: '',
    city: '',
    st: '',
    zip: '',
    usertype: 'customer',
},
...
```
# Use RTK Query in ProfileForm.js
- Example of using both the Redux *userSlice* to keep state updated, and the RTK Query *apiSlice* to update the database.
- for userSlice: *updateUserState* and *selectCurrentUser*
- for apiSlice: *useUpdateCustomerMutation*
```
...
import {
  FormValidation,
  fieldsValidation
} from 'app/helpers/FormValidation';
import {
  updateErrorState
} from 'app/redux/errorsSlice';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  updateUserState,
  selectCurrentUser,
} from 'app/redux/userSlice';
import { useUpdateCustomerMutation } from 'app/redux/apiSlice';
...
```
- Define *updateCustomer* as a call to *useUpdateCustomerMutation* in the apiSlice.
```
...
export const ProfileForm = ({ form, handlePassword, isADuplicate }) => {
  const [updateCustomer] = useUpdateCustomerMutation();
  const userState = useSelector(selectCurrentUser);
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();
...
```
- *updateCustomer* with *newUser* object. This is a database call through *apiSlice*.
- *.unwrap()* gives you immediate access to the error or success payload after a mutation.
- *payload* is the response from *apiSlice* not the response from *fetch*. *apiSlice* can transform the data it receives from *fetch* to have any shape you like.
- Now we can update the *userSlice* in Redux with the *payload* we got from *apiSlice*.
- Then use *dispatch* to update the Redux store (*userSlice*)
```
...
updateCustomer(newUser).unwrap()
  .then((payload) => {
    //console.log(`updateCustomer fulfilled payload: `, payload)
    dispatch(updateUserState(payload));
    goToDashboard();
  })
  .catch((error) => {
    console.error('updateCustomer rejected error: ', error);
    dispatch(updateErrorState({ cell: 'Duplicate cell' }));
    dispatch(updateErrorState({ email: 'Duplicate email' }));

    let snackType='signUpError'
    enqueueSnackbar(null, {
      persist: false,
      content: key => <Snackbar id={ key } message={ snackType } />
    });
  });
...
```
