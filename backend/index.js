require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

// 替换成你自己的 Supabase 项目信息
const supabaseUrl = process.env.SUPABASE_URL|| 'https://kuvbxobpxjzgoimdmzgd.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1dmJ4b2JweGp6Z29pbWRtemdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MjIxNjQsImV4cCI6MjA1ODQ5ODE2NH0.UbI4EJyid8WC-zPj03fosvWvyOlLkmVqSkP2hfv7lWk';

const supabase = createClient(supabaseUrl, supabaseKey);

// 获取所有用户
app.get('/api/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

// 添加用户
app.post('/api/users', async (req, res) => {
  const { username, email, password } = req.body;
  const { data, error } = await supabase.from('users').insert([{ username, email, password }]);
  if (error) return res.status(500).json({ error });
  res.json(data);
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`后端服务运行中：http://localhost:${PORT}`);
});
