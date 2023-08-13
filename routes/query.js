const express = require("express");
const router = express.Router();
const query = require("../services/query");

router.get("/cafe", async function (req, res, next) {
  try {
    res.json(await query.getPaginatedAllCafes(req.query.page, req.query.location));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

router.get("/cafe/all", async function (req, res, next) {
  try {
    res.json(await query.getAllCafes(req.query.page));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

router.get("/employee", async function (req, res, next) {
  try {
    res.json(await query.getAllEmployees(req.query.cafe, req.query.page));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

router.post("/employee", async function (req, res, next) {
  try {
    res.json(await query.createEmployee(req.body));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

router.put("/employee", async function (req, res, next) {
  try {
    res.json(await query.updateEmployee(req.body));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

router.get("/employee/:id", async function (req, res, next) {
  try {
    res.json(await query.getEmployeeById(req.params.id));
  } catch (err) {    
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

router.post("/cafe", async function (req, res, next) {
  try {
    res.json(await query.createCafe(req.body));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

router.get("/cafe/:id", async function (req, res, next) {
  try {
    res.json(await query.getCafeById(req.params.id));
  } catch (err) {    
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

router.put("/cafe", async function (req, res, next) {
  try {
    res.json(await query.updateCafe(req.body));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

module.exports = router;
