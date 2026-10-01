require('dotenv').config({ path: './dot.env' }); // تأكيد قراءة الملف من نفس المجلد

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/workouts', workoutRoutes);

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ تحقق من وجود المتغيرات قبل الاتصال
if (!MONGO_URI) {
  console.error(" MONGO_URI غير موجود في ملف .env أو لم يتم قراءته");
  process.exit(1);
}
if (!PORT) {
  console.error(" PORT غير موجود في ملف .env أو لم يتم قراءته");
  process.exit(1);
}

// اتصال بقاعدة البيانات وتشغيل السيرفر
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log(' Connected to database');
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error connecting to DB:', err);
  });
