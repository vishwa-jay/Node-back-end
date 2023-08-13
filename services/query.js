const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const uuid = require("uuid");

async function getPaginatedAllCafes(page = 1, location = "") {
  const offset = helper.getOffset(page, config.listPerPage);
  let paramArray = [];
  let query = "SELECT *,(SELECT COUNT(e.id) from employees as e wHERE e.cafe_id=c.id) as employeecount FROM cafe as c";

  //filter condition appends to the query and parameter array updates
  //filter function can be improved for more filters as follows
  if (location.length > 0) {
    paramArray = [`%${location}%`, ...paramArray];
    query = query + ` WHERE location LIKE ?`;
  }

  //final query is as follows, to be executed
  query = query + ` ORDER BY employeecount DESC LIMIT ${offset},${config.listPerPage}`;

  //query executing after finalized query string and param list
  const rows = await db.query(query, paramArray);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getAllCafes() {
  const rows = await db.query( `SELECT *  FROM cafe`);
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}

async function getAllEmployees(cafe, page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  let rows = "";
  let query = "SELECT *,DATEDIFF(NOW(),e.startdate) as workeddays,(SELECT name FROM cafe as c WHERE c.id=e.cafe_id) as cafename FROM employees as e";

  if (cafe && String(cafe).length > 0) {
    rows = await db.query(
      `${query} WHERE cafe_id=? ORDER BY workeddays DESC LIMIT ${offset},${config.listPerPage}`,
      [cafe]
    );
  } else {
    rows = await db.query(
      `${query} ORDER BY workeddays DESC LIMIT ${offset},${config.listPerPage}`,
    );
  }

  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function createEmployee(employee) {
  const { name, email, phone, gender,startdate, cafe_id } = employee;
  const lastEmp = await findLastEmployee(); //check when no last employees available in the DB
  const newEmpNo = helper.createNewEmpId(lastEmp[0].id);

  let query = "INSERT INTO employees VALUES (?,?,?,?,?,?,?)";
  const newRow = await db.query(query, [
    `UI${newEmpNo}`,
    name,
    email,
    phone,
    gender,
    startdate,
    cafe_id,
  ]);
  let { data } = {};

  if (newRow.affectedRows > 0) {
    data = await getEmployeeById(`UI${newEmpNo}`);
    message = "Employee created successfully!";
  } else {
    throw new Error("Employee not created!");
  }

  return {
    data,
    message,
  };
}

async function getEmployeeById(empId) {
  let query = "SELECT * FROM employees WHERE id=?";
  const data = await db.query(query, [empId]);
  return {
    data,
  };
}

async function findLastEmployee() {
  let query = "SELECT * FROM employees ORDER BY id DESC LIMIT 1";
  const lastEmpRecord = await db.query(query);
  return lastEmpRecord;
}

async function updateEmployee(employee) {
  const { id, name, email, phone, gender,startdate, cafe_id } = employee;

  let query =
    "UPDATE employees SET name = ?,email=?,phone=?,gender =?,startdate=?, cafe_id =? WHERE id=?";
  const newRow = await db.query(query, [
    name,
    email,
    phone,
    gender,
    startdate,
    cafe_id,
    id,
  ]);

  let { data } = await getEmployeeById(id);
  let message;

  if (newRow.affectedRows > 0) {
    message = "Employee details updated successfully!";
  } else {
    throw new Error("Employee details not updated!");
  }

  return {
    data,
    message,
  };
}

async function getCafeById(cafeId) {
  let query = "SELECT * FROM cafe WHERE id=?";
  const data = await db.query(query, [cafeId]);
  return {
    data,
  };
}

async function createCafe(cafe) {
  const { name, location, description, logo } = cafe;
  const newUUID = uuid.v4();
  let query = "INSERT INTO cafe VALUES (?,?,?,?,?)";
  const newRow = await db.query(query, [
    newUUID,
    name,
    description,
    location,
    logo,
  ]);
  let { data } = {};

  if (newRow.affectedRows > 0) {
    data = await getCafeById(newUUID);
    message = "Cafe created successfully!";
  } else {
    throw new Error("Cafe not created!");
  }

  return {
    data,
    message,
  };
}

async function updateCafe(cafe) {
  const { id, name, location, description, logo } = cafe;
  let query =
    "UPDATE cafe SET name = ?,description=?,location=?,logo =? WHERE id=?";
  const newRow = await db.query(query, [name, description, location, logo, id]);

  let { data } = await getCafeById(id);
  let message;

  if (newRow.affectedRows > 0) {
    message = "Cafe details updated successfully!";
  } else {
    throw new Error("Cafe details not updated!");
  }

  return {
    data,
    message,
  };
}

module.exports = {
  getAllCafes,
  getPaginatedAllCafes,
  getAllEmployees,
  createEmployee,
  findLastEmployee,
  getEmployeeById,
  updateEmployee,
  createCafe,
  getCafeById,
  updateCafe,
};
