module.exports = function createDreamTeam(members) {
  let DreamTeam = []
  if ( !members | !Array.isArray(members) ) {
    return false
  }
  members.map(member => {
    if (typeof member == 'string') {
      DreamTeam.push(member.replace(/\s/g, '')[0].toUpperCase())
    }
  }
  )
  return DreamTeam ? DreamTeam.sort().join('') : false
};