# My Redux guide

## Notes on Redux
* ACTION -> STORE -> VIEW
* Only one STORE but can have multiple ACTIONS and VIEWS
* Advantage is in state management
* Easy to debug

## Environment
1. Npm init
2. Install babel and webpack dependencies 
3. Setup .babelrc
4. Setup webpack.config.js
5. Setup start script in package.json

## Setup REDUX
1. Create constants.js and identify all actions
2. Create InitialState.js - this is a snapshot representation of the state/sample data
3. Create directory for store
4. Create reducers.js inside store directory
5. Create reducer functions that take in initialState and action
6. Combine Reducers using Redux
7. Create store in index.js with reducer and initialState as arguments
8. Create Action Creators in action.js inside store directory


