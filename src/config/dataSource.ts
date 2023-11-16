import { DataSource } from "typeorm";


export const appDataSource = new DataSource({
    type:'postgres',
    host:'localhost',
    port:5432,
    database:'cellaradio',
    username:'postgres',
    password:'postgres',
    synchronize:true,
    logging:true,
    entities:[]
});