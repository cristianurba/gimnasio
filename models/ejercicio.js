const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from ejercicios', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

const create = ({ titulo, duracion, repeticiones }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into ejercicios (titulo, duracion, repeticiones) values (?,?,?)', [titulo, duracion, repeticiones], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const updateById = (pBody, pEjercicioId) => {
    return new Promise((resolve, reject) => {
        db.query('update ejercicios set ? where id = ' + pEjercicioId, [pBody], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}
const deleteById = (pEjercicioId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from ejercicios where id = ?', [pEjercicioId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}

module.exports = {
    getAll: getAll,
    create: create,
    updateById: updateById,
    deleteById: deleteById
}