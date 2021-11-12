const mongoose = require('../../config/database');
const ObjectId = mongoose.Schema.Types.ObjectId


const MovieSchema = new mongoose.Schema({
    nome: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    sinopse: {
        type: String,
        default: "Inserir sinopse"
    },
    ano_lancamento: {
        type: Date,
        default: "12/11/2021"
    },
    faturamento: {
        type: Number,
        default: 0,
    },
    poster: {
        type: String,
        default: "Inserir URL para imagem"
    },
    genero_id: {
        type: ObjectId,
        ref: 'Category',
        default: null
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

const Movie = mongoose.model('Movie', MovieSchema);
Movie.createIndexes()

module.exports = Movie