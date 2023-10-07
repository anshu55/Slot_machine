// PROJECT-1 (slotmachine)

// import React from 'react';
// import SlotM from './Slotmch';
// const App=()=>{
// return<>
//     <h1 className='heading_style'>👌Welcome to <span style={{fontweight: "bold"}}>Slot Machine Game 👌</span> {" "}</h1>
//     <div className='slotmachine'>
//     <SlotM x='😊' y='😊' z='😊'/>.
//     <hr/>
//     <SlotM x='😘' y='💕' z='😘'/>
//     <hr/>
//     <SlotM x='💕' y='💕' z='💕'/>
//     <hr/>
//     <SlotM x='👍' y='👍' z='👍'/>
//     <hr/>
//     </div>
//  </>
// }
// export default App;


// PROJECT-2 (iNCREASECOUNT)
// import React, { useState } from 'react';

// const App=()=>{
//     const state=useState();
//     // console.log(state);
//     // const name=['an' , 'sh' , 'u'];
//     // const [nam1 , name2 , name3]=name;
//     const [count,setCount]=useState(0);
//     const IncNum=()=>{
//         setCount(count+1);
//     // console.log("clicked " + count++);
// };
//     return(
//         <>
// <h1>{count}</h1>
// <button onClick={IncNum}>Click Me</button>
//         </>
//     );
// };
// export default App;


// PROJECT-3 (UpdateTime)
// import React, { useState } from 'react';
// const App=()=>{
//     let newTime=new Date().toLocaleTimeString();
//     const [time, setTime]=useState(newTime);
//     const UpdTime=()=>{
//         setTime(new Date().toLocaleTimeString());
// };
//     return(
//         <>
// <h1>{time}</h1>
// <button onClick={UpdTime}>Get Time</button>
//         </>
//     );
// };
// export default App;


// PROJECT-4 (DigitalTime)
// import React, { useState } from 'react';
// const App=()=>{
//     let time=new Date().toLocaleTimeString();
//     const [ctime,setCtime]=useState(time);
//     const UpdTime=()=>{
//          time=new Date().toLocaleTimeString();
//          setCtime(time);
//     };
//     setInterval(UpdTime,1000);
//     return(
//         <>
//         <h1 className='Time'>{ctime}</h1>
//         <button onClick={UpdTime}>Get Time</button>
//         </>
//     );
// };
// export default App;


//PRACTICE
// import React, { useState } from 'react';
// const App=()=>{
//     const purple="#8e44ad";
//     const [bg,setBg]=useState(purple);
//     const[name,setName]=useState('Click me')
//     const bgChange=()=>{
//        let newBg='#34495e';
//        setBg(newBg);
//        setName("on single!! :");
//        };
//     const bgBack=()=>{
//         setBg(purple);
//         setName("On double !! :")
//        };
//     return(
//         <>
//         <div style={{backgroundColor: bg}}>
//             <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
//         </div>
//         </>
//     );
// };
// export default App;




//  import React, { useState } from 'react';
//  const App=()=>{
//     const [name,setName]=useState('');
//     const [fullName,setFullName]=useState('');
//     const [lastname,setLastName]=useState('');
//     const [lastnamenew,setLastNamenew]=useState('Agrawal');
//     const onSubmits=(event)=>{
//         event.preventDefault();
//         setFullName(name);
//         setLastNamenew(lastname);
//     };
//     const inputEvent=(event)=>{
//         console.log(event.target.value);
//         setName(event.target.value);
        
//     };
//     const inputEventTwo=(event)=>{
//         setLastName(event.target.value);
//     }
//     return(
//         <>
//         <div className='main_div'>
//         <form onSubmit={onSubmits}>
//         <div>
//         <h1>Heloo {fullName}{lastnamenew}</h1>
//         <input 
//         type='text' 
//         placeholder='Enter your name' 
//         onChange={inputEvent}
//         value={name}    
//         />
//         <br />
//         <input 
//         type='text' 
//         placeholder='Enter your last name' 
//         onChange={inputEventTwo}
//         value={lastname}    
//         />

//         <button type='submit'>Click Me 😒
//         </button>
//         </div>
//         </form>
//         </div>
//         </>
//     );
// };
// export default App;



// import React, { useState } from 'react';
// const App=()=>{
//    const [fullName,setFullName]=useState({
//     fname:"",
//     lname: "",
//    });
//    const inputEvent=(event)=>{
//     console.log(event.target.value);  
//     console.log(event.target.name); 
//     const value=event.target.value;
//     const name=event.target.name;

// setFullName((prevalue)=>{
//     //console.log(prevalue)
//     if(name==='fname'){
//         return{
//             fname:value,
//             lname: prevalue.lname,
//         };
//     }
//     else if(name==='Name'){
//         return{
//             fname: prevalue.fname,
//             lname: value,
//         }; 
//     }
// });
    
// };
//    const onSubmits=(event)=>{
//        event.preventDefault();   
//        alert('form submitted');
//    };
   
//    return(
//        <>
//        <div className='main_div'>
//        <form onSubmit={onSubmits}>
//        <div>
//        <h1>
//        Heloo {fullName.fname}{fullName.lname}
//         </h1>
//        <input 
//        type='text' 
//        placeholder='Enter your name' 
//        name='fname'
//        onChange={inputEvent}
//        value={fullName.fname}
//        />
//        <br />
//        <input 
//        type='text' 
//        placeholder='Enter your last name'
//        name='lname'
//        onChange={inputEvent}
//        value={fullName.lname}    
//        />

//        <button type='submit'>Click Me 😒
//        </button>
//        </div>
//        </form>
//        </div>
//        </>
//    );
// };
// export default App;



