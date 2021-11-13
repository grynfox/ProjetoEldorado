const mongoose = require('../../config/database');

const CategorySchema = new mongoose.Schema({
    nome: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const Category = mongoose.model('Category', CategorySchema);
Category.createIndexes()

async function createDefaultCategories(){
    let action = {
        nome: "Ação"
    }

    let drama = {
        nome: "Drama"
    }

    let comedy = {
        nome: "Comédia"
    }

    let horror = {
        nome: "Terror"
    }

    let countCategories = await Category.countDocuments()
    if(countCategories == 0){
        await Category.create(action)
        await Category.create(drama)
        await Category.create(comedy)
        await Category.create(horror)

    }
}

createDefaultCategories()

module.exports = Category