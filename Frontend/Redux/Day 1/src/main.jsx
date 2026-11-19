import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import { Counting } from "./counting";



function App(){
    return (
        <>
        <Provider  store={store}>
        <h1>hello how are you </h1>
        <Counting/>

        </Provider>
        
        </>
    )
}


const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App/>)