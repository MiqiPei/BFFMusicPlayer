import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';

import{ headerLinks } from "@/common/local-data";
import{ SearchOutlined} from '@ant-design/icons'
import { Input } from "antd";
import{
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

export default memo(function BFFAppHeader() {
    const showSelectItem = (item, index) => {
        if (index < 3) {
          return (
            <NavLink to={item.link} exact>
              {item.title}
              <i className="sprite_01 icon"></i>
            </NavLink>
          )
        } else {
          return <a href={item.link}>{item.title}</a>
        }
      }
    return(
        <HeaderWrapper>
            <div className="content wrap-v1">
            <HeaderLeft>
                <a href="#/" className="logo sprite_01">BFF Music</a>
                <div className="select-list">{
                    headerLinks.map((item, index) => {
                        return (
                            <div key={item.title} className="select-item">
                                {showSelectItem(item, index)}
                            </div>
                        )
                    })
                }
                </div>
            </HeaderLeft>
            <HeaderRight>
                <Input className="search" placeholder="Music/Video" prefix={<SearchOutlined />}/>
                <div className="center">User Center</div>
                <div>Login</div>
            </HeaderRight>
            </div>
            <div className="divider"></div>

        </HeaderWrapper>


    )
}
)