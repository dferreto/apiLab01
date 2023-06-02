import * as express from "express"
import { AppDataSource } from "./data-source"
import cors = require("cors");
import helmet from "helmet";
import { cliente } from "./entity/Cliente";
import routes from "./routes";


const PORT=process.env.port || 3000;

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    
    //rutas

    app.use('/', routes);

const Cliente1 = new cliente()
Cliente1.cedula = 602310768;
Cliente1.nombre = "Enrique";
Cliente1.apellido1 = "Fernandez";
Cliente1.apellido2 = "Ortiz";
Cliente1.fechaNacimiento = "30-06-1998";
Cliente1.genero = "M";
Cliente1.estado = true;

const Cliente2 = new cliente()
Cliente2.cedula = 603310868;
Cliente2.nombre = "Jose";
Cliente2.apellido1 = "Ferreto";
Cliente2.apellido2 = "Moraga";
Cliente2.fechaNacimiento = "15-06-1990";
Cliente2.genero = "M";
Cliente2.estado = true;

const Cliente3 = new cliente()
Cliente3.cedula = 603220679;
Cliente3.nombre = "María";
Cliente3.apellido1 = "Rodríguez";
Cliente3.apellido2 = "Ramirez";
Cliente3.fechaNacimiento = "11-04-2001";
Cliente3.genero = "F";
Cliente3.estado = false;

const Cliente4 = new cliente()
Cliente4.cedula = 605730932;
Cliente4.nombre = "Fernanda";
Cliente4.apellido1 = "Esquivel";
Cliente4.apellido2 = "Ortiz";
Cliente4.fechaNacimiento = "10-12-2005";
Cliente4.genero = "F";
Cliente4.estado = false;


await AppDataSource.manager.save(Cliente1)
await AppDataSource.manager.save(Cliente2)
await AppDataSource.manager.save(Cliente3)
await AppDataSource.manager.save(Cliente4)

    // start express server
   app.listen(PORT, ()=>{console.log(`Servidor corriendo en el puerto: ${PORT}`)});

   

}).catch(error => console.log(error))






