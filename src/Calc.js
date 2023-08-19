import React, { Component } from 'react'
import './calc.css'
export default class Calc extends Component {

//function to display value
state={
    val:' ',
    ans:' '
}
    display=(event)=>{

        let num=event.target.value;
        
        let exp=this.state.val+""+num;
  
        document.getElementById('res').value=exp;
        this.setState({
            val:exp
        })
        // document.getElementById("res").innerHTML=this.state.val; 
  }

//function to clear display area when presssed C
   clear=()=>{
     document.getElementById('res').value=0;
     this.setState({
        val:' ',
        ans:' '
    })

  }

 // Function to perform calculation
   calculate=()=>{
    let input= document.getElementById('res').value.trim();   // getting the value from calculator
    var calc;      // calculating the expression entered using eval func 
    try{
        calc=eval(input);
        document.getElementById('res').value=calc;
    }
    catch{
        calc="Error"
    }
    this.setState({
        ans:calc,
    })
    
 }
 delete=()=>{

 var exp1=this.state.val;
 var exp2=exp1.substring(0,exp1.length-1)
    this.setState({
        val:exp2,
     })
  }


  render() {
    return (
        <>
      <div className=''>
        <table className="buttons">
            <tr>
               
           <td colSpan="4">
           <input type="text" id="res" value={this.state.val}/> 
             <p id='res1'>{(this.state.ans)}</p>
           </td> 
            </tr>
            <tr>
                <td colSpan="2"><input type="button" value="AC" onClick={this.clear}/></td>
                <td><input type="button" value="Del" onClick={this.delete}/></td>
                <td><input type="button" value="/" onClick={this.display}/></td>
                
            </tr>
            <tr>
                <td><input type="button" value="1"onClick={this.display}/></td>
                <td><input type="button" value="2"onClick={this.display}/></td>
                <td><input type="button" value="3"onClick={this.display}/></td>
                <td><input type="button" value="+"onClick={this.display}/></td>
            </tr>
            <tr>
                <td><input type="button" value="4"onClick={this.display}/></td>
                <td><input type="button" value="5"onClick={this.display}/></td>
                <td><input type="button" value="6"onClick={this.display}/></td>
                <td><input type="button" value="-"onClick={this.display}/></td>
            </tr>
            <tr>
                <td><input type="button" value="7"onClick={this.display}/></td>
                <td><input type="button" value="8"onClick={this.display}/></td>
                <td><input type="button" value="9"onClick={this.display}/></td>
                <td><input type="button" value="*"onClick={this.display}/></td>
            </tr>
            <tr>
                <td><input type="button" value="."onClick={this.display}/></td>
                <td><input type="button" value="0"onClick={this.display}/></td>
                <td  colSpan="3"><input type="button" value="="onClick={this.calculate}/></td>
               
            </tr>
        </table>
      </div>
      
    </>
    )
  }
}
