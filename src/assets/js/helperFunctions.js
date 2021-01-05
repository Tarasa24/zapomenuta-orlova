function convertCoord(NS, EW) {
  function convertDm(dd) {
    dd = Math.abs(dd)
    const deg = Math.floor(dd)
    return `${deg}° ${((dd - deg) * 60).toFixed(3)}`
  }

  return `${NS > 0 ? 'N' : 'S'} ${convertDm(NS)} ${
    EW > 0 ? 'E' : 'W'
  } ${convertDm(EW)}`
}

module.exports = {
  convertCoord,
}
