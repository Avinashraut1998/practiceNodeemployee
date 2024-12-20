const express = require("express");
const router = express.Router();

const Employee = require("./../models/Employes");

// post

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const employeData = new Employee(data);

    const response = await employeData.save();
    console.log("Data saved to the database");
    res.status(200).json(response);
  } catch (error) {
    console.error("Error saving person:", error);
    res.status(500).json({ error: "Internal server Error" });
  }
});

// get
router.get("/", async (req, res) => {
  try {
    const employe = await Employee.find();
    console.log("Data fetched successfully");
    res.status(200).json(employe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server Error" });
  }
});

// UPDATE OPERRATION PUT METHOD

router.put("/:id", async (req, res) => {
  try {
    const empId = req.params.id;

    const updatedEmpdata = req.body;

    const response = await Employee.findByIdAndUpdate(empId, updatedEmpdata, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: "Person Not found" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// // delete method delete

router.delete("/:id", async (req, res) => {
  try {
    const perId = req.params.id;

    const response = await Employee.findByIdAndDelete(perId);

    if (!response) {
      return res.status(404).json({ error: "Person Not found" });
    }

    console.log("data deleted");
    res.status(200).json({ massage: "Employee deleted..!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server Error" });
  }
});

module.exports = router;
