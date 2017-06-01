require('dotenv').config();
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/test'
