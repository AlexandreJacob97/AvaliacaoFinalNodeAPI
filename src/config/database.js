import { Sequelize } from 'sequelize'

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            dialect: 'postgres',
            database: 'exemplo_rna8',
            username: 'exemplo_rna8_user',
            password: 'tMiME0ydPUo66XBDkxa5XliRfyQeWsI1',
            host: 'dpg-dbh6vdcipgvc73d27e30-a.oregon-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        })
    }
}

export default new Database()