const Joi = require('joi');
const model = require('../models/user');
const User = model.User;

const getUser = async (req, res) => {
    try{
        const id = req.params.id;
        if(id){
            const dataByid = await User.findById(id);
            res.status(200).json({
                status: true,
                data: dataByid
            })
        }else{
            const data = await User.find();
            res.status(200).json({
                status: true,
                data: data
            })
        }
        
    }catch(e){
        res.status(500).json({
            status: false,
            msg: 'something went wrong'
        })
    }
}

const createUser = async (req, res) => {
    console.log('get user in user controoler')
    
    console.log(req.body,"== REquest body")
    

    const schema = Joi.object().keys({
        first_name: Joi.string().required().min(1),
        last_name: Joi.string().required().min(1),
        email: Joi.string().required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })

    const result = schema.validate(req.body);
    console.log(result," resulttt");
    if(result.error){
        res.status(400).json({
            message: result.error.details[0].message,
            status: false
        })
    }else{
        const user = new User(req.body);
        const userResult = user.save();
        console.log(userResult," User Result");
        res.status(200).json({
            status: true,
            msg: 'user saved successfully.'
        })
    }
}

module.exports = {
    getUser,
    createUser
}

