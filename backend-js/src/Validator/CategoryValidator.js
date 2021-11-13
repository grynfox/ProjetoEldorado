const Yup = require('yup');

const CategoryValidator = async (request, response, next) => {
    try {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
        });

        await schema.validate(request.body, { abortEarly: false });
        return next();
    } catch (error) {
        return response.status(409).json(error)
    }
}

module.exports = CategoryValidator;