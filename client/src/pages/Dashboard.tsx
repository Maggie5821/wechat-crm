import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios' // 确保路径正确

const Dashboard = () => {
  const [profile, setProfile] = useState<any>(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get('/auth/profile')
        console.log('Profile data:', res.data) // 调试输出
        setProfile(res.data.user) // 后端返回的是 { user: { email: ... } }
      } catch (err) {
        setError('⚠️ 登录状态无效，请重新登录')
        localStorage.removeItem('token') // 清掉 token
        setTimeout(() => navigate('/'), 1500) // 跳回登录页
      }
    }

    fetchProfile()
  }, [navigate])

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>👋 欢迎回来！</h2>
      {profile ? (
        <div>
          <p>当前登录用户：</p>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
          <p>邮箱：{profile.email}</p>
          <button className='button' onClick={()=>{navigate('/users')}}>去用户页面</button>
        </div>
      ) : (
        <p>正在加载个人信息...</p>
      )}
    </div>
  )
}

export default Dashboard
