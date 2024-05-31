import x from '@/pages/page.module.css';
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useState } from 'react';
import {Button as Shadbutton} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import userContext from '@/contexts/users';
import { useEffect } from 'react';

function Home() {
    const navigate = useNavigate();
    const [color, setColor] = useState(1);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {users,addUser, removeUser} = userContext();
    const openUserDetails = (userid) => navigate(`/users/${userid}`);

    useEffect(() => console.log(users), [users]);

    const colors = {
        1 : "red",
        2: "blue",
        3: "green"
    }

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(username!=='' && password !== ''){
            addUser({id: Math.ceil(Math.random() * 1000000), username:username, password:password});
        }
    }

    const deleteUser = (userid) => {
        removeUser(userid);
    }
    
    const changeColor = () => {
        color >= 1 && color < 3 ? setColor(color + 1) : setColor(1);
    }
            
    
    return (
        <div>
            <Link to="/2">Page 2</Link>
            <p className={x.text}>
                Hello World
            </p>
            <Card title="hello monde" counter={0} onClick={() => console.log("YO")}>
            </Card>
            <Button color={colors[color]} onClick={changeColor}>Pouet</Button>
            <p>The button is  {colors[color]}</p>
            {colors[color] === "green" ? <p>YO</p> : <></>}
            <Shadbutton>CHILDREEEN</Shadbutton>
            <p>Username:</p>
            <Input type="text" value={username} onChange={onUsernameChange} className=""></Input>
            <br />
            <p>Password : </p>
            <Input type="text" value={password} onChange={onPasswordChange} className=""></Input>
            <p>Votre nom : {username}</p>
            <p>Votre mot de passe : {password}</p>
            <Shadbutton onClick={onSubmit}>SUBMIT</Shadbutton>
            <ul>
                {users.map(user => (
                <li key={user.id} className="p-2 border-b flex gap-6">
                    <p>{user.username}</p>
                    <button onClick={() => openUserDetails(user.id)}>DETAILS</button>
                    <button onClick={() => deleteUser(user.id)}>DELETE</button>
                </li>
                ))}
            </ul>
        </div>
  )
}

export default Home