import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

// const span = React.createElement('h1', {}, 'My first span')
//
// const element = React.createElement('h1', {className: 'my-class'}, span)


// const element=()=>{
//     return <div>me first ggg</div>
// }
//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
        <App/>
    </DevSupport>
);
