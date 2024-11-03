const {StatusCodes} = require('http-status-codes');
const errorHandlerMiddleware = (err, req , res ,next) => {

    console.log('err');
    console.log(err);
    let customError ={
        // set default 
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later',
    };

    //error
    if (err.statusCode === 'validationError'){
        customError.msg = Object.values(err.errors)
        .map((item)=> item.message)
        .join(', ');
        customError.statusCode = 400;
    }

    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate entry for ${Object.keys(
            err.keyValue
        )} field, please chance anther valuer`;
        customError.statusCode = 400;
    }

    if (err.name =='ConstError'){
        customError.statusCode = 400;
        customError.msg = `no Item found with id : ${err.value}`;
    }

    return res.status(customError.statusCode).json({msg: customError.msg});

};

module.exports = errorHandlerMiddleware;