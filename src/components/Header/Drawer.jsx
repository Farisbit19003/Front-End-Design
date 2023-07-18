import React from 'react'
import { Drawer } from 'antd';
const DrawerComp = ({drawer,closeDrawer}) => {
    
  return (
    <>
      {/* DRAWER */}
      <Drawer
        placement="right"
        closable="false"
        onClose={() => closeDrawer()}
        open={drawer}
        title="Menu"
      >
        <nav>
          <ul className="flex flex-col font-ad cursor-pointer font-semibold gap-12 text-lg justify-around">
            <li>Home</li>
            <li>What We Do</li>
            <li>Service</li>
            <li>Project</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </Drawer>
    </>
  );
}

export default DrawerComp