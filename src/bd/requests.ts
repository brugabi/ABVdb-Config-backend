import { db } from "./connection";


//reparar codigos de genotipos parcial ou completo
export const atualizar_sequencia = async() => {
    const provVirus = "DENV3"
    try{
        await (await db).execute(`
            UPDATE sequencias
            SET genotype=230
            WHERE serotype = ?
            AND genotype = 0
            `,[provVirus])
            console.log("Sequencia Atualizada");
        }catch(err){
            console.log(err)
        }
}


