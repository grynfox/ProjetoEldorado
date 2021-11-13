const Movies = require('../../Schemas/Movie');

const IndexMovies = async (request, response) => {
    try {
        const resposta = await Movies.find({})
        .populate({
            path: 'genero_id',
            select: 'nome'
        });
        return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = IndexMovies;