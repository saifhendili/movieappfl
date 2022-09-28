import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { BookDETAILSReducer, BookListReducer ,GetLanguage} from "./Reducers/BookReducer";
import { auth } from "./Reducers/auth";
import { alert } from "./Reducers/alert";



const reducer = combineReducers({
    bookList: BookListReducer,
    bookDetails:BookDETAILSReducer,
    GetLanguage,
    auth,
    alert

})
const initialState ={}
const middleware={thunk}
 
const store= createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...Object.values   ( middleware)))

)
export default store;