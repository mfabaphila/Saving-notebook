import { useState } from "react";
import "./index.css";

export default function App(){
  const[purpose, setPurpose]=useState("")

  const[month, setMonth]=useState("")
  const [date, setDate] = useState("");
const [amount, setAmount] = useState("");
const[source, setSource] =useState("")
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


  return(

  <>
    <h1>Save and Record</h1>
  <fieldset div className="forms">
    <legend>Any Amount takes you closer to your goal</legend>
  
    <form onSubmit={AddAmount}>

<label>
  <abbr title="Where did you get the money you are saving?">Source</abbr>
</label>

<select value={source} onChange= {(e)=>setSource(e.target.value)} required>
  <option value="" disabled selected>Select Source of Amount</option>
  <option value="salary">Salary</option>
  <option value="rent">Rent</option>
<option value="freelance">Freelance</option>
<option value="investment">Investment</option>
<option value="gift">Gift</option>
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
  </fieldset>
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
        <h1>The Saving NoteBook</h1>
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
       

        <label>Username</label>
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
