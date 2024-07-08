import dotenv from 'dotenv'
dotenv.config()

const env = process.env

// This config is an object which contains all the environment variables
// This config can contain any number of variables, objects
const config = {
    port: env.PORT as string
}

export default config
