import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)

const heading = React.createElement(
"h1",
{id:"heading"},
"Namaste React🚀 using React Element"
);
// This is how we create react element using core react.
console.log(heading)

//JSX ==> Babel transpiles it to React.createElement ==>ReactElement-JS Object ==> HTMLElement(render) 
//JSX (transpiled before reaches the js engine) - PARCEL - Babel
// JSX is an HTML inside js or it's not an HTML. It is just an syntax similar to html or xml.

const jsxheading = <h1 id='heading'>Namaste React🚀 using JSX</h1>

// This is how we create react element using jsx. 

console.log(jsxheading)


// React Functional Comopnent
const Title = () =>{
    return <h1 id='heading'>Namaste React🚀 using JSX</h1>
};

//Component composition

const HeadingComponent = () =>(
    <div id='conatiner'>
        {heading}
        <Title />
        <h1 className='heading'>Namaste React🚀 using Functional Comopnent</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
