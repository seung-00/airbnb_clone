import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import SearchBar from './SearchBar'
import { ReactComponent as AirbnbLogo } from '../../../svg/logo.svg'

/**
 * Components responsible for layout navigation bar
 */

const NavBlock = styled.div`
    display: flex;
    background: white;
    height: 80px;
    align-items: center;


    .left-block, .right-block {
        width: 466px;
        height: 80px;
    }

    .left-block {
        margin-left: 50px;
    }

    .center-block {
        width: 348px;
        height: 48px;
    }
`;

const LogoWrapper = styled.svg`
        fill: blue !important;
        height: 80px !important;
        width: 102px !important;
        path {
            fill: rgb(255, 56, 92) !important;
        }
`

const NavBar = () => {
    return (
        <NavBlock>
            <div className='left-block'>
                <LogoWrapper>
                    <AirbnbLogo />
                </LogoWrapper>
            </div>
            <div className='center-block'>
                <SearchBar />
            </div>
            <div className='right-block'>

            </div>
        </NavBlock>
    )
}

export default NavBar
