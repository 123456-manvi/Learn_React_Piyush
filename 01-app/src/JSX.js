import React from "react";
import ReactDom from "react-dom/client";




// function add(x,y)
// {
//     // js in jsx
//     return x+y;
// }
//export const root=ReactDom.createRoot(document.getElementById('root'));
// export function MyComponent()
// {
//     // const name="Piyush Garg";
//     // const x=2+3;

    
//     return (
//         // or use <> </>
        
//     // <h2>Hello{name} </h2>
  
//     //  <h2>hello {add(10,5)}</h2>
//     );
// }


// ex 2............................
// export function MyComponent(){
//     // apply dynamic attributes .....
//     const link="https://piyushgarg.dev";
//     return <a href={link}>Click Me</a>
// }


// export const root=ReactDom.createRoot(document.getElementById('root'));
// root.render(<MyComponent/>);



// ex3.................

export function Card(){
    return <h1>Card</h1>
}


export const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<Card/>);

