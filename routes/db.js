import { Pool } from "pg";

const connectString = "postgres://uoxykwjk:iFRUEGSroYH3e4kNM5WXL6H_MEJp6qjk@kesavan.db.elephantsql.com/uoxykwjk"
const db = new Pool({ connectionString })

export default db;