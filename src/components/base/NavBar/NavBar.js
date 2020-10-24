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
    text-align: left !important;
    font-weight: 500;
    @media (min-width: 375px) {
        padding-left: 24px !important;
        padding-right: 24px !important;
    }
    @media (min-width: 950px) {
        padding-left: 40px !important;
        padding-right: 40px !important;
    }
    @media (min-width: 1128px) {
        padding-left: 80px !important;
        padding-right: 80px !important;
    }
    .left-block, .right-block {
        flex: 1 0 140px !important;
    }
    .center-block {
        padding: 0 24px !important;
        flex: 0 1 auto !important;
    }
`;

const LogoWrapper = styled.div`
        path {    
            height: 80px !important;
            width: 102px !important;
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
