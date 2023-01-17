import { Layout, Menu } from "antd";
import type { MenuProps}  from 'antd';
import { Outlet, useNavigate } from 'react-router-dom'
import { layoutMenus, menuKeyToPathMap } from "./constant/menus";


function App() {
  const navigate = useNavigate();

  const onMenuSelect: MenuProps['onSelect'] = ({ key }) => {
    const routePath = menuKeyToPathMap[key];
    if (routePath) {
      navigate(routePath);
    }
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Sider className="h-full overflow-y-auto bg-white">
        <div className="site-name">天问就打</div>
        <Menu items={layoutMenus} theme="dark" mode="inline" onSelect={onMenuSelect}></Menu>
      </Layout.Sider>
      <Layout className="w-full overflow-y-auto relative">
        <Layout.Header className="bg-white sticky w-full top-0 z-10" style={{ backgroundColor: 'white' }} />
        <Layout.Content className="main-content">
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
