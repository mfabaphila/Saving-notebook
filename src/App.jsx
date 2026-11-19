import { useState, useEffect} from "react";
import "./index.css";

export default function App(){
  const[purpose, setPurpose]=useState("")

  const[month, setMonth]=useState("")
  const [date, setDate] = useState("");
const [amount, setAmount] = useState("");
const[source, setSource] =useState("")
const[exchange, setExchange] =useState("")
const [amounts, setAmounts]=useState(
  JSON.parse(localStorage.getItem("amounts"))||[]
)


const AddAmount=()=>{
  if(amount===""){
  return
}
const newAmount={
  source:source,
  date:date,
  purpose:purpose,
  amount:amount, 

}
const updatedAmount =[...amounts, newAmount]
setAmounts(updatedAmount)
localStorage.setItem("amounts", JSON.stringify(updatedAmount))
}

const remove =(index)=>{
const updatedList = amounts.filter((item,i)=> i !==index)
setAmounts(updatedList)
localStorage.setItem("amount", JSON.stringify(updatedList))
}

useEffect(()=>{
  fetch("https://open.er-api.com/v6/latest/USD")
  .then((results)=>results.json())
  .then((data)=>{
    setExchange(data.rates.ZAR.toFixed(2))
  
  })
},
[])

  return(

  <>
    <h1 style={{color:"wheat"}}>Save and Record </h1>git
    <p style={{color:"salmon", fontSize:"larger"}}> R1 = {exchange} USD</p>
    <div className="box">
  <fieldset div className="forms">
    <legend>Any Amount takes you closer to your goal</legend>
  
    <form onSubmit={AddAmount}>

<label>
  <abbr title="Where did you get the money you are saving?">Source</abbr>
</label>

<select  id="source" value={source} onChange= {(e)=>setSource(e.target.value)} required>
  <option value="" disabled selected>Select Source of Amount</option>
  <option value="Salary">Salary</option>
  <option value="Rent">Rent</option>
<option value="Freelance">Freelance</option>
<option value="Investment">Investment</option>
<option value="Gift">Gift</option>
</select>

<label>Date</label>
<input 
type="date"
value={date}

placeholder="Select a date"
onChange={(event)=>setDate(event.target.value)} required
/>

<label>Purpose</label>
<input 
type="text"
value={purpose}
placeholder="Why you saving this money?"
onChange={(event)=>setPurpose(event.target.value)} required
/>
<label>
  <abbr title="How much are you saving?">Amount</abbr>
</label>
<input 
type="number"
value={amount}
placeholder="R"
onChange={(event)=>setAmount(event.target.value)} required
/>
<button>Add Amount</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>SOURCE</th>
          <th>DATE</th>
               <th>PURPOSE</th>
                    <th>AMOUNT</th>  
                    <th>ACTION</th>
                   
        </tr>
      </thead>
      <tbody>
{amounts.map((item,index)=>(
  <tr key ={index}>
        <td>{item.source}</td>
     <td>{item.date}</td>
      <td>{item.purpose}</td>
       <td>{item.amount}</td>
       <th>
        <abbr title="Delete permanently?">

       
       <button id="delBtn" onClick={()=>remove(index)}>Del</button>
        </abbr>
       </th>
  </tr>
)
)
}
 
  
      </tbody>
    </table>
    
  </fieldset>
   </div>
  </>

  )

}



// ______________________________________________________________________________________
// This is a loginPage
// ______________________________________________________________________________________

function LoginPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [loginWin, setLoginWin] = useState("");
  const [loginFail, setLoginFail] = useState("");
  const[email, setEmail]=useState("")

  const loginUser = () => {
    if (validation() === true) {
      login();
    }
  };

  const validation = () => {
    setNameError("");
    setUsernameError("");
    setPasswordError("");
    if (name === "") {
      setNameError("A name is required");
      return false;
    }
    if (username === "") {
      setUsernameError("A Surname is required");
      return false;
    }
    if (password === "") {
      setPasswordError("A Password is required");
      return false;
    }
    return true;
  };

  function login() {
    setLoginFail("");
    setLoginWin("");
    if (username === "phila" && password === "1992") {
      setLoginWin(`Welcome ${name}, loging in...`);
    } else {
      setLoginFail(`Sorry ${name}, wrong credentials`);
      return false;
    }
  }

  return (
    <>
      <div className="headings">
        <h1 style={{color:"wheat"}}>The Saving NoteBook</h1>
      </div>

      <div className="box">
        <h2>Keep track of your savings</h2>
        <h3>Enter your details to login</h3>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
 <p style={{ color: "red", fontStyle: "italic" }}>{nameError} </p>

         <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            required
        />
       

        <label>Username/s</label>
        <input
          type="text"
          placeholder="Enter your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <p style={{ color: "red", fontStyle: "italic" }}>{usernameError} </p>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        
        />
        <p style={{ color: "red", fontStyle: "italic" }}>{passwordError} </p>

        <button onClick={loginUser}>Login</button>
        <p style={{ color: "green" }}>{loginWin}</p>
        <p style={{ color: "red", fontStyle: "italic" }}>{loginFail} </p>
      </div>
    </>
  );
}
