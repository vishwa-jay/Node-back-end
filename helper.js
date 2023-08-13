function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

function createNewEmpId(lastEmpId) {
  const lastIdWithoutPreFix = String(lastEmpId).substring(2);
  const newId = String(parseInt(lastIdWithoutPreFix) + 1);
  return newId.padStart(7, "0");
}

module.exports = {
  getOffset,
  emptyOrRows,
  createNewEmpId,
};
