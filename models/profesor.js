const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from profesores', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

const create = ({ nombre, experiencia }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into profesores (nombre, experiencia) values (?,?)', [nombre, experiencia], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const updateById = (pBody, pProfesorId) => {
    return new Promise((resolve, reject) => {
        db.query('update profesores set ? where id = ' + pProfesorId, [pBody], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}

const deleteById = (pProfesorId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from profesores where id = ?', [pProfesorId], (err, result) => {
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