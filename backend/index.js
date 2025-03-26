require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

// Supabase 初始化
const supabaseUrl = process.env.SUPABASE_URL || 'https://kuvbxobpxjzgoimdmzgd.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1dmJ4b2JweGp6Z29pbWRtemdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MjIxNjQsImV4cCI6MjA1ODQ5ODE2NH0.UbI4EJyid8WC-zPj03fosvWvyOlLkmVqSkP2hfv7lWk';
const supabase = createClient(supabaseUrl, supabaseKey);

// ✅ 通用 CRUD 路由创建函数（自动注册 GET + POST）
const createCrudRoutes = (tableName) => {
  // GET 所有数据
  app.get(`/api/${tableName}`, async (req, res) => {
    const { data, error } = await supabase.from(tableName).select('*');
    if (error) return res.status(500).json({ error });
    res.json(data);
  });

  // POST 新数据（通用，依赖 req.body）
  app.post(`/api/${tableName}`, async (req, res) => {
    const { data, error } = await supabase.from(tableName).insert([req.body]);
    if (error) return res.status(500).json({ error });
    res.json(data);
  });
};

// ✅ 特殊表（自定义字段逻辑）：users
app.get('/api/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.post('/api/users', async (req, res) => {
  const { username, email, password } = req.body;
  const { data, error } = await supabase.from('users').insert([{ username, email, password }]);
  if (error) return res.status(500).json({ error });
  res.json(data);
});

// ✅ 特殊表：games（字段逻辑）
app.get('/api/games', async (req, res) => {
  const { data, error } = await supabase.from('games').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.post('/api/games', async (req, res) => {
  const { title, rating, release_date, company, tags } = req.body;
  const { data, error } = await supabase.from('games').insert([
    { title, rating, release_date, company, tags }
  ]);
  if (error) return res.status(500).json({ error });
  res.json(data);
});

// ✅ 自动注册其余常规表的通用 API
[
  'developers',
  'game_genres',
  'game_mechanics',
  'game_platforms',
  'genres',
  'mechanics',
  'platforms',
  'publishers',
  'release_info',
  'review_ranking',
  'score_info',
  'spec_info',
  'buy_options'
].forEach(createCrudRoutes);
// 获取指定游戏详情
app.get('/api/games/:id', async (req, res) => {
  const gameId = req.params.id

  const { data, error } = await supabase
    .from('games')
    .select('*')
    .eq('id', gameId)
    .single() // 只取一个对象

  if (error) {
    console.error('❌ 获取游戏详情失败:', error)
    return res.status(500).json({ error: '数据库出错了！' })
  }

  if (!data) {
    return res.status(404).json({ error: '未找到该游戏' })
  }

  res.json(data)
})

// ✅ 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ 后端服务运行中：http://localhost:${PORT}`);
});
