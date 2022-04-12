function dbDeleteItem(value, db, key = 'id') {
    try {
        const test = db.findAndRemove({[key]: value})
    } catch (err) {
        throw new Error(`Error while deleting item ${value} from ${key}:`, err)
    }
}

module.exports = {dbDeleteItem}