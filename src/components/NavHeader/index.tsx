import {MenuFoldOutlined } from '@ant-design/icons';
import {Breadcrumb, Dropdown, MenuProps, Switch} from "antd";
import styles from './index.module.less'
const NavHeader: React.FC = () => {
  const breadcrumbItems = [
    {
      title: '首页'
    },
    {
      title: '列表'
    }
  ]
  const items:MenuProps['items'] =[
    {
      key: '1',
      label: '邮箱: 375701364@qq.com',
    },
    {
      key: '2',
      label: '退出',
    }
  ]
  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
       <MenuFoldOutlined />
        <Breadcrumb items={breadcrumbItems} style={{marginLeft: 10}} />
      </div>
      <div className="right">
        <Switch checkedChildren="暗黑" unCheckedChildren="默认" defaultChecked  style={{marginRight: 10}}/>
        <Dropdown menu={{items}} trigger={['click']}>
          <span className={styles.nickName}>Admin</span>
        </Dropdown>
      </div>
    </div>
  );
}

export default NavHeader;
