import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import SearchBlock from './SearchBlock'
import { ReactComponent as LogoSvg } from '../../../svg/logo.svg'
import MainBlock from './MainBlock';
import MenuBlock from './MenuBlock';

/**
 * Components responsible for layout navigation bar
 */

const NavBlock = styled.div`
    display: flex;
    background: white;
    height: 80px;
    align-items: center;
    text-align: left;
    @media (min-width: 375px) {
        padding-left: 24px;
        padding-right: 24px;
    }
    @media (min-width: 950px) {
        padding-left: 40px;
        padding-right: 40px;
    }
    @media (min-width: 1128px) {
        padding-left: 80px;
        padding-right: 80px;
    }
    
    // fix flex-basis size for outer block
    .left-block, .right-block {
        flex: 1 0 140px;
    }
    .right-block {
        display: flex;
        justify-content: flex-end;
    }
    .center-block {
        padding: 0 24px;
        flex: 0 1 auto;
    }
`;

const LogoWrapper = styled.div`
    path {
        height: 80px;
        width: 102px;
        fill: rgb(255, 56, 92);
    }
`

const NavBar = () => {
    return (
        <NavBlock>
            <div className='left-block'>
                <LogoWrapper>
                    <LogoSvg />
                </LogoWrapper>
            </div>
            <div className='center-block'>
                <SearchBlock />
            </div>
            <div className='right-block'>
                <MainBlock />
                <MenuBlock />
            </div>
        </NavBlock>
    )
}

export default NavBar
