import { Pool } from "pg";

const pool = new Pool();

const db = {
    query: async (text: string, params?: Array<any>) => {
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

