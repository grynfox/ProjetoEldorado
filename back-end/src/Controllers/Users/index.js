const User = require('../../Schemas/User');

const IndexUsers = async (request, response) => {
    try {
        const resposta = await User.find({});
        return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = IndexUsers;