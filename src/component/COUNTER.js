import { BUTTON } from "./BUTTON"
export function COUNTER(props) {
    // const data={
    //     color:"red",
    //     title:"HTML ref",
    //     width:"1000px"
    
    //   },
    //    data1={
    //     color:"red",
    //     title:"HTML ref",
    //     width:"1000px"
    
    //   },
    //    data3={
    //     color:"red",
    //     title:"HTML ref",
    //     width:"1000px"
    
    //   }
    return (
    <div> 
      <BUTTON data={props.data} style={{width:props.data.width}} />
      <BUTTON data1={props.data1} />
      <BUTTON data3={props.data3} />
      
    </div>
    );
  }