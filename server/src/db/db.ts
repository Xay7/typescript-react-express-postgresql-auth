import { Pool, QueryResult } from "pg";

const { PGUSER, PGHOST, PGPASSWORD, PGPORT, PGDATABASE }: any = process.env;

const pool = new Pool({
    user: PGUSER,
    password: PGPASSWORD,
    host: PGHOST,
    port: PGPORT,
    database: PGDATABASE
});


const db = {
    query: async (text: string, params: Array<any>) => {
        const client = await pool.connect()
        let res
        try {
            await client.query('BEGIN')
            try {
                res = await client.query(text, params)
                await client.query('COMMIT')
            } catch (err) {
                await client.query('ROLLBACK')
                throw err
            }
        } finally {
            client.release()
        }
        return res
    }
}

export default db;

