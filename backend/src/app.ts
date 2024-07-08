import express from 'express';
import config from './config'
import { router } from './router';

const app = express()

// urlencoded -> for requests security + limit of 30mb per request
app.use(express.urlencoded({ extended: true, limit: '30mb' }))

// makes every request in json
app.use(express.json())

// use the routes
app.use(router)

// if the route is not found in your routes -> this will return a not found response
app.use('*', (_, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})



// intialize the node application 
try {
    app.listen(config.port, () => {
        console.log(`Server running on localhost:${config.port}`)
    })
} catch (error: any) {
    console.log(`Error occurred to run the server: ${error.message as string}`)
}