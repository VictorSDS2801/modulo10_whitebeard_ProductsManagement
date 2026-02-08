const mongoose = require("mongoose")
const app = require("./app")
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Conectado ao MongoDB")
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
})
.catch(err => console.error("Erro ao conectar no MongoDB:", err))