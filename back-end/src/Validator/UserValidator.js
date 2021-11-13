const Yup = require('yup');

const UserValidator = async (request, response, next) => {
    try {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            email: Yup.string().required(),
            senha: Yup.number().required()
        });

        await schema.validate(request.body, { abortEarly: false });
        return next();
    } catch (error) {
        return response.status(409).json(error)
    }
}

module.exports = UserValidator;