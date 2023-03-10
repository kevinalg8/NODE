import app from "../app.js"
import message from "./message.js"

export const caseEntorno =()=>{
    switch (process.env.NODE_ENV) {
        case "developer":
            message(`En el puerto de desarrollo: ${app.get("PORT")}`,"success");
            break;
        case "qa":
            message(`En el puerto de pruebas: ${app.get("PORT")}`,"warning");
            break
        case "production":
            message(`En el puerto de produccion: ${app.get("PORT")}`,"danger");
            break
        default:
            message(`Nada ${app.get("PORT")}`,"white");
            break;
    }
}

//export default caseEntorno FORMA SIN BABEL
