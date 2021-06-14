const client = require('../database.js');

function postNacionalidad(req, res) {
    const { nacionalidad, pais, clavesit, codigopld } = req.body;
    const query = `insert into catalogo_Nacionalidad(nacionalidad, pais, clavesit, codigopld) VALUES ($1,$2,$3,$4)
    `;
    client.query(query, [nacionalidad, pais, clavesit, codigopld], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send('201 Creado')
    })
}

function getAllNacionalidad(req, res) {
    client.query('SELECT * FROM catalogo_Nacionalidad', [], (error, results) => {
        if (error) {
            res.status(500).send({ error })
        }
        res.status(200).json(results.rows)
    });
}

function getOneNacionalidad(req, res) {
    const { nacionalidadid } = req.params;
    client.query('SELECT * FROM catalogo_Nacionalidad WHERE nacionalidadid = $1', [nacionalidadid], (error, results) => {
        if (error) {
            res.status(500).send({ error })
        }
        res.status(200).json(results.rows[0])
    });
}

function deleteNacionalidad(req, res) {
    const { nacionalidadid } = req.params;
    client.query('DELETE FROM catalogo_Nacionalidad WHERE nacionalidadid = $1', [nacionalidadid], (error, results) => {
        if (error) {
            res.status(500).send({ error })
        }
        res.status(201).send('204 No Content')
    });
}

function putNacionalidad(req, res) {
    const { nacionalidad, pais, clavesit, codigopld } = req.body;
    const { nacionalidadid } = req.params;

    const query = `
    UPDATE catalogo_nacionalidad  
    SET 
    nacionalidad = $1, 
    pais = $2,
    clavesit = $3, 
    codigopld = $4
    WHERE nacionalidadid = $5;
    `;

    client.query(
        query, [nacionalidad, pais, clavesit, codigopld, nacionalidadid],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`nacionalidad modificado con ID: ${nacionalidadid}`)
        }
    )

}

module.exports = {
    getOneNacionalidad,
    getAllNacionalidad,
    postNacionalidad,
    putNacionalidad,
    deleteNacionalidad
};