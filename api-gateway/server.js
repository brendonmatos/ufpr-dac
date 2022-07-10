const express = require('express')
const httpProxy = require('express-http-proxy')
const PORT = process.env.PORT || 3000

const clienteProxy = httpProxy(process.env.CLIENTES_SERVICE || 'http://clientes-ws:3000')
const gerenteProxy = httpProxy(process.env.GERENTES_SERVICE || 'http://gerentes-ws:3000')
const contaProxy = httpProxy(process.env.CONTAS_SERVICE || 'http://contas-ws:3000')

const app = express()
app.get('/', (req, res) => {
    res.send('Hello World! Hello from NODE')
})

app.use('/api/v1/clientes', clienteProxy)
app.use('/api/v1/gerentes', gerenteProxy)
app.use('/api/v1/contas', contaProxy)

app.listen(PORT, () => {
    console.log('Server started!')
    console.log('Listening on http://localhost: ' + (PORT))
})

