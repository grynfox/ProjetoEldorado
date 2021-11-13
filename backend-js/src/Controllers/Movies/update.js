const Movie = require('../../Schemas/Movie');

const UpdateMovie = async (request, response) => {
    try {
        const dados = request.body;
        const id = request.params.id;
        const resposta = await Movie.findByIdAndUpdate(id, {
            ...dados,
            updated_at: Date.now()
        }, 
        {
            new: true
        });
        if(!resposta)
            return response.status(400).send({
                erro: 'Este filme nao esta cadastrado em nosso banco de dados'
            })
        else
            return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = UpdateMovie;