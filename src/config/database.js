import { Sequelize } from 'sequelize'

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            dialect: 'postgres',
            database: 'avaliacaofinalnodeapi',
            username: 'avaliacaofinalnodeapi_user',
            password: 'aBGbW1OEpQMirDePdwyXkrAUokh51MCw',
            host: 'dpg-dblqkljm8hqs739u6qtg-a.oregon-postgres.render.com',
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