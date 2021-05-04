import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req: any, res: { send: (arg0: any[]) => void; }) =>{
    res.send(users);
};

export const getUser = (req: { params: { id: string; }; body: { name: string; email: string; password: string; }; }, res: { send: (arg0: string) => void; }) => {
    const {id} = req.params;

    const foundUser = users.find((user)=> user.id == id);

    res.send(foundUser);
};

export const  createUser = (req: { params: { id: string; }; body: { name: string; email: string; password: string; }; }, res: { send: (arg0: string) => void; }) => {
    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`User with the name ${user.name} added to the database!`);
};

export const deleteUser = (req: { params: { id: string; }; body: { name: string; email: string; password: string; }; }, res: { send: (arg0: string) => void; }) => {
    const {id} = req.params;

    users = users.filter((user)=>user.id != id);

    res.send(`User with the ìd ${id} deleted from the database`);
};

export const patchUser = (req: { params: { id: string; }; body: { name: string; email: string; password: string; }; }, res: { send: (arg0: string) => void; }) => {
    const {id} = req.params;

    const user = users.find((user)=> user.id == id);
    
    const {name, email, password} = req.body;
    
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    res.send(`User with the ìd ${id} has been updated`);
};