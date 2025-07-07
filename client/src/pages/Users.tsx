// client/src/pages/Users.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/users')
      .then(res =>{
        console.log('获取用户列表:', res.data); // 调试输出
        setUsers(res.data)})
      .catch(err => {
        setError('⚠️ 1无法获取用户列表，请重新登录');
        localStorage.removeItem('token');
        setTimeout(() => navigate('/'), 1500);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">用户列表</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="border p-3 rounded shadow">
            <div>👤 {user.name}</div>
            <div>📧 {user.email}</div>
          </li>
        ))}
      </ul>
      <button className='button' onClick={()=>{navigate('/dashboard')}}>去dashboard页面</button>
    </div>
  );
}
