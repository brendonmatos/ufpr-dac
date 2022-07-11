const express = require('express')
const httpProxy = require('express-http-proxy')
const PORT = process.env.PORT || 3000

const clienteProxy = httpProxy(process.env.CLIENTES_SERVICE)
const gerenteProxy = httpProxy(process.env.GERENTES_SERVICE)
const contaProxy = httpProxy(process.env.CONTAS_SERVICE)

const app = express()
app.get('/', (req, res) => {
    res.send('Hello World! Hello from NODE')
})

app.use('/api/v1/clientes', clienteProxy)
app.use('/api/v1/gerentes', gerenteProxy)
app.use('/api/v1/contas', contaProxy)
// app.get('api/v1/cliente/cadastro', (req, res) => {
//     res.json({
        
//     })
// })

// app.get('api/v1/gerente/clientes/:id', (req, res) => {
//     res.json({

//     })
// })

app.listen(PORT, () => {
    console.log('Server started!')
    console.log('Listening on http://localhost: ' + (PORT))
})

