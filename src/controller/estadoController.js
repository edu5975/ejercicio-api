const client = require('../database.js');

function postEstado(req, res) {
    const { nombreestado, claveestado, nacionalidadid, claveestadoburo } = req.body;
    const query = `insert into catalogo_estado(nombreestado, claveestado, nacionalidadid, claveestadoburo) VALUES ($1,$2,$3,$4)
    `;
    client.query(query, [nombreestado, claveestado, nacionalidadid, claveestadoburo], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send('201 Creado')
    })
}

function getAllEstado(req, res) {
    client.query('SELECT * FROM catalogo_estado', [], (error, results) => {
        if (error) {
            res.status(500).send({ error })
        }
        res.status(200).json(results.rows)
    });
}

function getOneEstado(req, res) {
    const { estadoid } = req.params;
    client.query('SELECT * FROM catalogo_estado WHERE estadoid = $1', [estadoid], (error, results) => {
        if (error) {
            res.status(500).send({ error })
        }
        res.status(200).json(results.rows[0])
    });
}

function deleteEstado(req, res) {
    const { estadoid } = req.params;
    client.query('DELETE FROM catalogo_estado WHERE estadoid = $1', [estadoid], (error, results) => {
        if (error) {
            res.status(500).send({ error })
        }
        res.status(201).send('204 No Content')
    });
}

function putEstado(req, res) {
    const { nombreestado, claveestado, nacionalidadid, claveestadoburo } = req.body;
    const { estadoid } = req.params;

    const query = `
    UPDATE catalogo_estado 
    SET 
    nombreestado = $1, 
    claveestado = $2,
    nacionalidadid = $3, 
    claveestadoburo = $4
    WHERE estadoid = $5;
    `;

    client.query(
        query, [nombreestado, claveestado, nacionalidadid, claveestadoburo, estadoid],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Estado modificado con ID: ${estadoid}`)
        }
    )

}

module.exports = {
    getOneEstado,
    getAllEstado,
    postEstado,
    putEstado,
    deleteEstado
};