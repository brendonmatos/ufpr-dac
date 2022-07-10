const express = require('express')
const httpProxy = require('express-http-proxy')
const PORT = process.env.PORT || 3000

const clienteProxy = httpProxy('http://clientes-ws:3000')
const gerenteProxy = httpProxy('http://gerentes-ws:3000')
const contaProxy = httpProxy('http://contas-ws:3000')

const app = express()
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.all('/api/v1/clientes', clienteProxy)
app.all('/api/v1/gerentes', gerenteProxy)
app.all('/api/v1/contas', contaProxy)

app.listen(PORT, () => {
    console.log('Server started!')
    console.log('Listening on http://localhost: ' + (PORT))
})

