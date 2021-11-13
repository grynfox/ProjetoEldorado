const User = require('../../Schemas/User');

const CreateUser = async (request, response) => {
    try {
        const dados = request.body;
        const resposta = await User.create(dados);
        return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = CreateUser;