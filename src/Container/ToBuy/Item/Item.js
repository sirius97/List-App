import React from 'react';
import classes from './Item.css'
import QuantityCounter from '../../../Component/QuantityCounter/QuantityCounter';

const item = (props) => {

    // <label>Quantity <input type="text" onChange ={props.changeQuantity} value={props.quantity}/></label><br/>    
      return  (
            <div className={classes.Item}>
                <div style = {{display:'flex', marginLeft:'250px'}}>
                    <div style ={{marginRight:'10px'}}>
                    <input type="text" style = {{height:'78%',fontFamily:'Lobster',fontSize:'24px'}}onChange = {props.changeName} placeholder="Enter here" value={props.name}/>
                    </div>
                    <QuantityCounter quantity = {props.quantity} increment = {props.increment} decrement = {props.decremet} />
                </div>
                <div style={{display:'flex',marginLeft:'350px'}}>
                <button onClick={props.delete} style={{backgroundColor:"red",marginRight: '10px',padding:'8px', fontFamily : 'Lobster'}}>Delete</button>
                <button onClick = {props.done} style={{backgroundColor:"green",padding:'8px',fontFamily : 'Lobster'}}>Done</button>
                </div>
                
            </div>
        );

}

export default item;