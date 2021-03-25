import 'dotenv/config'

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT,
  db_name : "mpcomm",
  db_username : "postgres",
  db_password: "admin"
}

export default config
