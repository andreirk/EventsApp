import { Menu, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { RouteNames } from '../router';

function MainMenu() {
    const router = useHistory();
    const [selectedMenuKeys, setSelectedMenuKeys] = useState<any>([])

    
    useEffect(() => {
        console.error(selectedMenuKeys, router.location.pathname)
        setSelectedMenuKeys([router.location.pathname])
      
    }, [])

    return (
        <div>
        
            <Menu selectedKeys={selectedMenuKeys} 
                onSelect={(info: any) => {
                    setSelectedMenuKeys(() => [info.key])
                    router.push(info.key)
                }}
              
                mode={"horizontal"} >
              <Menu.Item
                key={RouteNames.SEARCH}
                
             
              >
                Поиск
              </Menu.Item>
              <Menu.Item
                key={RouteNames.CHAT}
              
              >
                Мои переписки
              </Menu.Item>
              <Menu.Item
                key={RouteNames.SWIPE}
              
              >
                Знакомства
              </Menu.Item>
              <Menu.Item
                key={RouteNames.MATCHES}
               
              >
                Симпатии
              </Menu.Item>
              <Menu.Item
                key={RouteNames.CONCURS}
              
             
              >
               <span style={{color: 'red'}}>Конкурс</span> 
              </Menu.Item>
            </Menu>
          
        </div>
    )
}

export default MainMenu
