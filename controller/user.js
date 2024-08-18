const db = require('../models')
const User = db.user

const getUser =async (req,res) => {
    let response = await User.findAll({})
    res.status(200).json({message : "seccess", data : response})
}
const addUser =async (req,res) => {
    let {userName, email} = await req.body
    let response = await User.create({userName: userName, email : email})
    res.status(200).json({message : "seccess", data : response})
}
const getUserById =async (req,res) => {
    let {id} = await req.params
    let response = await User.findOne({where : {id: id}})
    res.status(200).json({message : "seccess", data : response})
}
const updateUser =async (req,res) => {
    let {id, userName,email} = await req.body
    let response = await User.update({userName,email},{where : {id: id},  returning: true })
    console.log(response)
    res.status(200).json({message : "seccess", data : response[1]})
}

const deleteUser =async (req,res) => {
    let {id} = await req.params
    let response = await User.destroy({where : {id: id}, returning: true})
    if(response){
        res.status(200).json({message : "seccess", data : response})
    }else{
        res.status(404).json({message : "Not Found", data : response})
    }
}

module.exports= {getUser,addUser,getUserById,updateUser,deleteUser}