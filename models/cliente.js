const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

const create = ({ nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into clientes (nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni) values (?,?,?,?,?,?,?,?,?)', [nombre, apellidos, direccion, email, edad, sexo, cuota, new Date(), dni], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}

const deleteById = (pClienteId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from clientes where id = ?', [pClienteId], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    });
}

module.exports = {
    getAll: getAll,
    create: create,
    deleteById: deleteById,
}