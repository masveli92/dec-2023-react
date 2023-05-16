import Joi from "joi";

const carValidator = Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'this field must contain only letters, min-1, max-20',
        'string.required':'this field can`t be empty'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.required': 'this field can`t be empty'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {carValidator}