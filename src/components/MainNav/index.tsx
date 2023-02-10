import React, {useState} from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Menu} from "antd";
import {useNavigate, useLocation} from 'react-router-dom'
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const Comp:React.FC = () => {
  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ):MenuItem => {
    return{
      label,
      key,
      icon,
      children
    }
  }
  const items = [
    getItem('老式路由', '/page1', <PieChartOutlined/>),
    getItem('路由表路由', '/page2', <DesktopOutlined/>),
    getItem('User', 'page3',<UserOutlined/>, [
      getItem('user-1','/page3/page3-1'),
      getItem('user-2','/page3/page3-2'),
      getItem('user-3','/page3/page3-3')
    ]),
    getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),

  ]
  const [openKeys, setOpenKeys] = useState([''])
  const onOpenChange:MenuProps['onOpenChange'] = (keys) => {
    //  展开和回收某项菜单的时候执行这里
    // console.log(keys) // keys是一个数组，记录了当前的展开项的key
    const lastKey = keys[keys.length-1]
    setOpenKeys(lastKey ? [lastKey]: [])
  }
  const navigateTo = useNavigate()
  const menuClick = (e:{key:string}) => {
    // console.log(e.key)
    //   点击跳转到对应的路由 编程式导航 --> 利用到一个hook --- useNavigate
    navigateTo(e.key)
  }
  //  设置当前页面与菜单导航高亮对应 --> 利用一个hook  --- useLocation 获取当前页面的路由信息
  const {pathname: currentPage} = useLocation()
  return (
    <Menu theme="dark" defaultSelectedKeys={[currentPage]} openKeys={openKeys} mode="inline" items={items} onOpenChange={onOpenChange} onClick={menuClick} />
  )
}

export default Comp
