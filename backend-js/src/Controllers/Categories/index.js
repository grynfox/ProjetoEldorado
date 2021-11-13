const Category = require('../../Schemas/Category');

const IndexCategories = async (request, response) => {
    try {
        const resposta = await Category.find({});
        return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = IndexCategories;