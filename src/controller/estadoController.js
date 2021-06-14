const client = require('../database.js');

function postEstado(req, res) {
    const { nombre, descripcion } = req.body;
    const query = `insert into estado(nombre,descripcion) values (?,?);
    `;
    database.query(query, [nombre, descripcion],
        (err, rows, fields) => {
            if (!err) {
                res.status(200).send({
                    status: 'estado guardado',
                    id: rows.insertId,
                    nombre,
                    descripcion
                });
            } else {
                res.status(500).send({ message: err })
            }
        }
    );
}

function getAllEstado(req, res) {
    client.connect()
    client.query('SELECT * FROM catalogo_estado')
        .then(response => {
            res.status(200).send(response.rows)
            client.end()
        })
        .catch(err => {
            res.status(500).send({ err })
            client.end()
        })
}

function getOneEstado(req, res) {
    const { id } = req.params;
    database.query('SELECT * FROM estado WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            if (rows.length != 0) {
                res.status(200).send(rows[0])
            } else
                res.status(404).send({ message: 'estado not found' })
        } else {
            res.status(500).send({ message: err })
        }
    });
}

function deleteEstado(req, res) {
    const { id } = req.params;
    database.query('DELETE FROM estado WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.status(200).send({ status: 'estado deleted: ' + id });
        } else {
            res.status(500).send({ message: err })
        }
    });
}

function putEstado(req, res) {
    const { nombre, descripcion } = req.body;
    const { id } = req.params;
    const query = `
    update estado set nombre = ?, descripcion = ? where id = ?;
  `;
    database.query(query, [nombre, descripcion, id], (err, rows, fields) => {
        if (!err) {
            res.status(200).send({
                status: 'estado Updated',
                id,
                nombre,
                descripcion
            });
        } else {
            res.status(500).send({ message: err })
        }
    });
}

module.exports = {
    getOneEstado,
    getAllEstado,
    postEstado,
    putEstado,
    deleteEstado
};