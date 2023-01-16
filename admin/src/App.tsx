import { Layout } from "antd";
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Sider className="h-full overflow-y-auto bg-white">
        <div className="site-name">天问就打</div>
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
