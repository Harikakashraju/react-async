import React,{useState} from "react";

// console.log("rendering");


// function  hello(){
//     console.log("rendered");
//     return 0;
// }

const App = ()=>{
    // console.log("rendering");

 let [count,setCount] = useState(()=>{
    console.log("rendered");
    return 0;     //return 0 as count = 0 first
 });

    // function increase(){
    //     setCount(count+1) ;
    //     setCount(count+1) ;//async process //count 1
    //      console.log(count); // count 0 
    // }

    // function increase1(){
    //     setCount(count=>count+1); //callback
    //     setCount(count=>count+1); /* here adds by 2 */ // count 2
    // }

    return(
        <div>
            <p>Count:{count} </p>
            <button onClick={()=>setCount(count+1)}>Add</button>
            {/* <button onClick={increase1}>Add</button>  */}
        </div>
    )
}

export default App;