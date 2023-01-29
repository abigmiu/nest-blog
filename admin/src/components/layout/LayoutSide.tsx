import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from "antd";
import type { MenuProps}  from 'antd';
import { layoutMenus } from "../../constant/menus";

export function LayoutSide() {
    const navigate = useNavigate();

    const { pathname } = useLocation();

    const onMenuSelect: MenuProps['onSelect'] = ({ key }) => {
        navigate(key)
    }
    return (
        <>
            <div className="site-name">后台管理系统</div>
            <Menu items={layoutMenus} theme="dark" mode="inline" onSelect={onMenuSelect} defaultOpenKeys={[pathname]}></Menu>
        </>
    )
}
