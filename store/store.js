// import CookiesServer from "cookies";
import Cookies from "js-cookie";
// import CookiesServer from "next-cookies";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import {
  // getStoredState,
  // persistReducer,
  persistCombineReducers,
  persistStore,
} from "redux-persist";
import { CookieStorage } from "redux-persist-cookie-storage";
import rootReducer, { rootReducerCombined } from "./reducers"; // { rootReducerCombined }

export let store;

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// create a makeStore function
export const makeStore = (context) => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    store = createStore(rootReducerCombined, bindMiddleware([]));
    return store;
    // CookiesServer.express();
    // const { req, res } = context;
    // const cookieJar = new NodeCookiesWrapper(new CookiesServer(req, res));

    // const persistConfig = {
    //   key: "pinch",
    //   storage: new CookieStorage(cookieJar /*, options */),
    //   stateReconciler(inboundState, originalState) {
    //     // Ignore state from cookies, only use preloadedState from window object
    //     return originalState;
    //   },
    // };

    // let preloadedState;
    // preloadedState = getStoredState(persistConfig);
    // console.log("preloadedState is: ", preloadedState);
    // // const getState = async () => {
    // //   try {
    // //     preloadedState = await getStoredState(persistConfig);
    // //   } catch (error) {
    // //     preloadedState = {};
    // //   }
    // // };
    // // getState();

    // const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
    // return createStore(persistedReducer, preloadedState);
    // return store;
  } else {
    const persistConfig = {
      key: "pinch",
      storage: new CookieStorage(Cookies /*, options */),
      whitelist: ["auth", "cart"],
    };
    const persistedReducer = persistCombineReducers(persistConfig, rootReducer);

    store = createStore(persistedReducer, bindMiddleware([]));

    store.__persistor = persistStore(store, {});

    return store;
  }
};

// export store;

const reducersds = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.auth) nextState.auth = state.auth; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore);
