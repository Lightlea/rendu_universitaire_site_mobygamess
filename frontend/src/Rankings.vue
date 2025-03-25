<template>
    <div class="flex-1 p-6">
      <div class="max-w-3xl mx-auto">
        <Topbar />
        <RankingTabs />
  
        <div class="flex items-baseline justify-between mt-6 mb-4">
          <h2 class="text-2xl font-bold">Most Researched Games</h2>
          <div class="text-sm text-gray-500">past week · <a href="#" class="underline">[feed]</a></div>
        </div>
  
        <RankingList :games="games" />
      </div>
    </div>
  </template>
  
  <script setup>
import Topbar from './components/Topbar.vue'
import RankingTabs from './components/RankingTabs.vue'
import RankingList from './components/RankingList.vue'
  
  const games = [{
      id: 1,
      title: 'Game Name',
      rating: 8.3,
      date: '09 / 2004',
      company: 'Maxis Software Inc.',
      friends: ['https://i.pravatar.cc/24?img=1', 'https://i.pravatar.cc/24?img=2', 'https://i.pravatar.cc/24?img=3'],
      tags: ['Windows', 'Social simulation']
    },
    {
      id: 2,
      title: 'Game Name',
      rating: 8.3,
      date: '09 / 2004',
      company: 'Maxis Software Inc.',
      friends: ['https://i.pravatar.cc/24?img=4', 'https://i.pravatar.cc/24?img=5', 'https://i.pravatar.cc/24?img=6'],
      tags: ['Windows', 'Social simulation']
    },{
      id: 3,
      title: 'Game Name',
      rating: 8.3,
      date: '09 / 2004',
      company: 'Maxis Software Inc.',
      friends: ['https://i.pravatar.cc/24?img=4', 'https://i.pravatar.cc/24?img=5', 'https://i.pravatar.cc/24?img=6'],
      tags: ['Windows', 'Social simulation']
    },{
      id: 4,
      title: 'Game Name',
      rating: 8.3,
      date: '09 / 2004',
      company: 'Maxis Software Inc.',
      friends: ['https://i.pravatar.cc/24?img=4', 'https://i.pravatar.cc/24?img=5', 'https://i.pravatar.cc/24?img=6'],
      tags: ['Windows', 'Social simulation']
    },{
      id: 5,
      title: 'Game Name',
      rating: 8.3,
      date: '09 / 2004',
      company: 'Maxis Software Inc.',
      friends: ['https://i.pravatar.cc/24?img=4', 'https://i.pravatar.cc/24?img=5', 'https://i.pravatar.cc/24?img=6'],
      tags: ['Windows', 'Social simulation']
    }
    
  ]
  </script>
  