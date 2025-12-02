## Redux

- configureStore
        - reducer (user:userReducer)
- createSlice (userSlice)
        - name: "user"
        - initialState: {}
        - reducers:
            - addUser
                - state,action
                    - return action.payload
            - removeUser
- Provide the store to the App using Provider from react-redux

- In Login component:
        - useDispatch to get dispatch function
        - useSelector to access user state (subscribe to store)
        - On successful login, dispatch addUser with response data


## On logout:

- dispatch(removerUser())
- navigate to login