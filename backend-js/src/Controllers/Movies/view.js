const Movie = require('../../Schemas/Movie');

const ViewMovie = async (request, response) => {
    try {
        const id = request.params.id;
        const resposta = await Movie.findById(id)
        .populate({
            path: 'genero_id',
            select: 'nome'
        });
        return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = ViewMovie;