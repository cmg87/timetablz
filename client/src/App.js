import axios from "axios";
import React, {useState, useEffect} from 'react';


function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getData() {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(response.data)
            setUsers(response.data)
        }

        getData();
    }, [])

    return (
        <div className="App">
            {users.map(user => <p>{user.name}</p>)}
        </div>
    );
}

export default App;
