const { Report } = require("../models");

const createReport = async (req, res) => {
  try {
    console.log("📥 Received Data:", req.body); // ✅ Log received request data

    const { type, generated_by } = req.body;
    if (!type || !generated_by) {
      return res.status(400).json({ error: "Type and generated_by are required" });
    }

    const report = await Report.create({
      type,
      generated_by,
      generated_at: new Date(),
    });

    console.log("✅ Report Saved:", report);
    res.status(201).json({ message: "Report saved successfully", report });
  } catch (error) {
    console.error("❌ Report Save Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createReport };
