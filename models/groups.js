const db = require('../data/db-Config');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  addTask,
};

function find() {
    return db('groups');
  }

// async function findById(id) {
//     const event = await db('groups')
//       .where({ id })
//       .first();
  
//     if (group) {
//       return db('tasks')
//         .where({ group_id: id })
//         .then(tasks => {
//           group.tasks = tasks.map(t => ({ ...t, done: mapBoolean(t.done) }));
//           return group;
//         });
//     } else {
//       return null;
//     }
// }

async function add(group) {
    try {
      const [id] = await db('groups').insert(group, 'id');
  
      return findById(id);
    } catch (error) {
      console.log('error', error);
    }
  }
  