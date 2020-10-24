import React from 'react'
import styled from 'styled-components'
import { ReactComponent as MenuSvg } from '../../../svg/menu.svg'
import { ReactComponent as ProfileSvg } from '../../../svg/profile.svg'
import BaseButton from '../../common/BaseButton'

const MenuButton = styled(BaseButton)`
    padding: 5px 5px 5px 12px;
    height: 42px;
`

const ProfileWrapper = styled.div`
    // fix flex basis size
    flex: 0 0 30px;
    margin-left: 12px;
    align-items: center;
`

const MenuWrapper = styled.div`
    width: 77px;
`

const MenuBlock = () => {
    return (
        <MenuWrapper>
            <MenuButton shadow border>
                <MenuSvg />
                <ProfileWrapper>
                    <ProfileSvg />
                </ProfileWrapper>
            </MenuButton>
        </MenuWrapper>
    )
}

export default MenuBlock
