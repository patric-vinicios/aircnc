const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({

    thumbnail: String, // Json não suporta o envio de imagem para o backend.
    // Temos que usar outro formato quando temos upload na requisição. Selecione "Multipart-form" no Imsomnia
    // PRecisamos fazer  instalação deuma terceira lib que lida cm multipart-form data. Upload de img, files etc..
    //  
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, {
    toJSON: {
        virtuals: true
    }
});

SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema)
