const Movie = require('../../Schemas/Movie');

const DeleteMovie = async (request, response) => {
    try {
        const id = request.params.id;
        const resposta = await Movie.findByIdAndRemove(id);
        if(!resposta)
            return response.status(400).send({
                erro: 'Não é possivel apagar o que não existe'
            })
        else
            return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = DeleteMovie;