const Category = require('../../Schemas/Category');

const CreateCategory = async (request, response) => {
    try {
        const dados = request.body;
        const resposta = await Category.create(dados);
        return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = CreateCategory;