// // PROJECT-1 (slotmachine)
// import React from 'react';
// const SlotM=(props)=>{
//     // let x='😂';
//     // let y='😂';
//     // let z='😂';
// // let x=props.x;
// // let y=props.y;
// // let z=props.z;
// let {x,y,z}=props;
//     if((x==y) && (y==z)){
//         return(
//             <>
//                 <div className="slot_inner">
//                      <h1> {x} {y} {z} </h1>
//                     <h1>This is Matching</h1>
                    
//                 </div>
//             </>
//         );
//     }else{
//         return(
//             <>
//                 <div className="slot_inner">
//                      <h1> {x} {y} {z}</h1>
//                     <h1>This is not Matching</h1>
                   
//                 </div>
//             </>
//         );

//     }
// };
// export default SlotM;

import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Slotmch=()=> {
    const[num,setNum]=useState(0);
    const incNum=()=>{
        setNum(num+1);
    }
    const decNum=()=>{
        if(num>0){
            setNum(num-1);
        }
        else{
            alert("Sorry! Zee limit is reached");
            setNum(0);
        }
        
    }
  return (
   <>
    <div className='main_div'>
       <div className='center_div'>
        <h1>{num}</h1>
        <idv className='btn_div'></idv>
        <button onClick={incNum} ><AddIcon/></button>
        <button onClick={decNum}><RemoveIcon/></button>
       </div>
    </div>
   </>
  )
}

export default Slotmch