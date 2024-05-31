import React from 'react';
import { useParams } from 'react-router-dom';
import userContext from '@/contexts/users';

const Page = () => {
    const {userid} = useParams();
    const {getUser} = userContext();
    const user = getUser(userid);

    console.log(user.username);

    return (<div>
        
        
        User Page : {userid}
        
        <p>No : {user.username}</p>
    
    
    
    
    </div>);
}

export default Page;