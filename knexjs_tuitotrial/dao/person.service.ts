const db = require('../db/db');

class PersonDAO {
    async createPerson(firstName, lastName, email) {
        const [id] = await db('person').insert({
            email: email,
            first_name: firstName,
            last_name: lastName
        }).returning('id');
    }
}