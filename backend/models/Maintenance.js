const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  tenantName: { type: String, required: true },
  issueDescription: { type: String, required: true },
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);