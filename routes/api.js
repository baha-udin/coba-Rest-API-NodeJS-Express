//panggil yg diperlukan
const express = require('express')
const router = express.Router()
const axios = require('axios')
const { response } = require('express')

//konfigurasi default Axios dengan detil Akun Raja Ongkir
axios.defaults.baseURL = 'https://api.rajaongkir.com/starter'
axios.defaults.headers.common['key'] = 'ffe5fe6c482695af1b2d1747ecc1868d'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//get province
router.get('/provinsi', (req, res) => {
    axios.get('./province')
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
})

//get city by province
router.get('/kota/:provId', (req, res) => {
    const id = req.params.provId
    axios.get(`/city?province=${id}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
})

//get cost
router.get('/ongkos/:asal/:tujuan/:berat/:kurir', (req, res)=> {
    const param = req.params
    axios.post('/cost', {
        origin: param.asal,
        destionation: param.tujuan,
        weight: param.berat,
        courier: param.kurir
    })
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
})

module.exports = router