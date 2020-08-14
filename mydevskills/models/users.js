const developerskills = ['HTML','CSS','JavaScript','Python','NodeJS','MongoDB','Mongoose','React','jQuery','PHP']

function getAll() {
    return skills;
}

function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(devSkill => devSkill.id === parseInt(id));
}
module.exports =    {
developerskills:developerskills,
getAll:getAll,
getOne:getOne
}