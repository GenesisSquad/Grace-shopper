const {client} = require('./client');
const bcrypt = require('bcrypt');
const userString = 'username,"firstName","lastName", email, "imageURL", "isAdmin"';
const createUser = async({username,password}) => {
    try {
        const SALT_COUNT = 10;
        const hash = await bcrypt.hash(password,SALT_COUNT)
        const {rows:[user]} = await client.query(`
            INSERT INTO users(username,password) VALUES($1,$2) ON CONFLICT DO NOTHING RETURNING id, username;
            `,[username.toLowerCase(),hash])
        return user;
    } catch (error) {
        console.error(error);
    }
}

const getUser = async({ username, password }) => {
    try {
        const user = await getUserByUsername(username);
        const hashedPassword = user.password;
        const res = await bcrypt.compare(password,hashedPassword);
        if(res){
            return {username};
        } 
        // console.log(res);
        return res;
    } catch (error) {
        return error
    }
}

const getAllUsers = async() => {
    try {
        const {rows} = await client.query(`
        SELECT ${userString} FROM users;
        `)
        return rows;
    } catch (error) {
        console.error(error);
    }
}

const getUserById = async(id) => {
    try {
        const {rows:[user]} = await client.query(`
        SELECT ${userString} FROM users WHERE id = $1;
        `,[id])
        return user;
    } catch (error) {
        console.error(error);
    }
}
const getUserByUsername = async(username) => {
    try {
        username = username.toLowerCase();
        const {rows:[user]} = await client.query(`
        SELECT ${userString} FROM users WHERE username = $1;
        `,[username])
        return user
    } catch (error) {
        console.error(error);
    }
}
module.exports = {
    createUser,
    getUser,
    getUserById,
    getUserByUsername,
    getAllUsers
}