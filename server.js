const path = require('path')
const jsonServer = require('json-server')


const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname,'fake_server', 'db.json'))
const middlewares = jsonServer.defaults()
server.use('/api',router)
server.listen(3456, () => {
    console.log('YO');
})