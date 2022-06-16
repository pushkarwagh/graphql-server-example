const db = require("./db")

const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!',
    students: ()=> db.students.list()
 }

 const Students = {
     college: (root) => {
         return db.colleges.get(root.collegeId)
     }
 }
 module.exports = {Query, Students}