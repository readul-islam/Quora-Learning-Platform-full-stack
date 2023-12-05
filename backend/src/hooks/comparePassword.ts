import bcrypt  from 'bcrypt';
const comparePassword = (password:string, hashPassword:string)=>{

    const match =  bcrypt.compareSync(password, hashPassword);

    return match

}

export default comparePassword