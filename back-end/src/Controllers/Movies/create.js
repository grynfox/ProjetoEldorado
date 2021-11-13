const Movie = require('../../Schemas/Movie');

const CreateMovie = async (request, response) => {
    try {
        const dados = request.body;
        const resposta = await Movie.create(dados);
        return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = CreateMovie;