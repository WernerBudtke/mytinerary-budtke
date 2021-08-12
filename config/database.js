const mongoose = require('mongoose')  
mongoose.connect(process.env.MONGODB, { //uso process.env.blabla para tomar mi var de entorno del .env que antes configure en serverjs
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}) // where will connect, obj options devuelve promesa
.then(() => console.log("Database connected"))
.catch(error => console.log(error))