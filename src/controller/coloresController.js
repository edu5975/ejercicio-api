const client = require('../database.js');

function postColores(req, res) {
    const { nombre, color } = req.body;
    const query = `insert into colores(nombre, color) VALUES ($1,$2)
    `;
    client.query(query, [nombre, color], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send('201 Creado')
    })
}

function getAllColores(req, res) {
    client.query('SELECT * FROM colores', [], (error, results) => {
        if (error) {
            res.status(500).send({ error })
        }
        res.status(200).json(results.rows)
    });
}

function getOneColores(req, res) {
    const { id } = req.params;
    client.query('SELECT * FROM colores WHERE id = $1', [id], (error, results) => {
        if (error) {
            res.status(500).send({ error })
        }
        res.status(200).json(results.rows[0])
    });
}

function deleteColores(req, res) {
    const { id } = req.params;
    client.query('DELETE FROM colores WHERE id = $1', [id], (error, results) => {
        if (error) {
            res.status(500).send({ error })
        }
        res.status(201).send('204 No Content')
    });
}

function putColores(req, res) {
    const { nombre, color } = req.body;
    const { id } = req.params;

    const query = `
    UPDATE colores 
    SET 
    nombre = $1, 
    color = $2
    WHERE id = $3;
    `;

    client.query(
        query, [nombre, color, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Color modificado con ID: ${id}`)
        }
    )

}

module.exports = {
    getOneColores,
    getAllColores,
    postColores,
    putColores,
    deleteColores
};