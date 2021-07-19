import {Router} from "express";
const router = Router();

import data from '../data.json';
enum Role { SUPERADMIN = 0, ADMIN = 1, SUBSCRIBER=2 };

// class User{
//     first_name : string;
//     last_name : string;
//     email : string;
//     phone : string;
//     address :string;
//     role: Role;

//     constructor(fn: string, ln: string, email: string, phone: string, address: string, role:Role){
//         this.first_name = fn;
//         this.last_name = ln;
//         this.email = email;
//         this.phone = phone;
//         this.address = address;
//         this.role = role;
//     }
// }

type T = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
    role: string;
}

//Send All Users
router.get("/", (req, res) => {
    res.json(data);
    // console.log(data[0]);
});

//Add New User
router.post("/", (req, res) => {
    const newUser: T = {
        id: data.length.toString() ,
        first_name: req.body.first_name,
        last_name: req.body.middleName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        role: req.body.role,
    }
    data.push(newUser);
    res.send('Success');
});

//Delete User
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    if (data.some(data => data.id === id)) {
        let idx = 0;
        for (let index = 0; index < data.length; index++) {
            if (data[index].id === id){
                idx = index;
                break;
            }
        }
        data.splice(idx, 1);
        res.send("Success");
    }
    res.send("Error");
});

//Edit User
router.put('/:id', (req, res) => {
    let id = req.params.id;
    if (data.some(data => data.id === id)) {
        data.forEach(object => {
            if (object.id === id) {
                object.first_name = req.body.firstName;
                object.last_name= req.body.middleName;
                object.email = req.body.email;
                object.phone = req.body.phoneNumber;
                object.address = req.body.address;
                object.role = req.body.role ;
                res.send("Success");
            }
        });
    }
});

module.exports = router;