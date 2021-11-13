const Yup = require('yup');

const MovieValidator = async (request, response, next) => {
    try {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            sinopse: Yup.string(),
            ano_lancamento: Yup.date(),
            faturamento: Yup.number(),
            poster: Yup.string(),
            genero_id: Yup.string(),
            created_at: Yup.date(),
            updated_at: Yup.date(),
        });

        await schema.validate(request.body, { abortEarly: false });
        return next();
    } catch (error) {
        return response.status(400).json(error)
    }
}

module.exports = MovieValidator;