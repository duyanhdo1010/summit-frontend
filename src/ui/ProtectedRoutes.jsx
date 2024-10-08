import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

function ProtectedRoutes() {
  const navigate = useNavigate();
  // Check login and user status
  const { isLogin, user } = useSelector((state) => state.auth);
  // console.log('user, isLogin:', user, isLogin);
  // If there is NO authenticated user, redirect to login page
  useEffect(function () {
    if (!isLogin || !user) {
      navigate('/login');
    } else if (isLogin && user.role === 'admin') {
      navigate('/admin/dashboard');
    }
  });

  // If there is a user, render the app (children)
  //  if (isLogin && user) return children;
  // (ở đây ta không return được children nếu applayout ở ngoài đang bọc protectedroutes mà phải dùng Outlet)
  if (isLogin && user) return <Outlet />;
}

export default ProtectedRoutes;
