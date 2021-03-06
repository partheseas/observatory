import { syncMain } from "@mckayla/electron-redux";
import * as redux from "redux";

import { reducer } from "./common";

const store = redux.createStore(reducer, syncMain);
const { dispatch, subscribe } = store;

export * from "./common";
export { dispatch, store, subscribe };
