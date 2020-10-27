import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BaseButton from '@/components/common/BaseButton'
import { ReactComponent as EarthSvg } from '@/svg/earth.svg'
import { ReactComponent as BottomSvg } from '@/svg/bottom.svg'

    
const HostWrapper = styled.div`
    border-radius: 22px;
    padding: 12px;
`

const LangCurr = styled.div`
    background: transparent;
    padding: 12px;
    align-items: center;
    display:flex;
`

const MainWrapper = styled.div`
    height: 42px;
    display:flex;
    margin-right: 8px;
`

const EarthSvgWrapper = styled.div`
    padding: 0px 6px 0px 0px;
`

const MainBlock = () => {
    return (
    <MainWrapper>
        <BaseButton grayBackground>
            <HostWrapper>
                <Link to="/" /* host/homes */>
                        호스트 되기
                </Link>
            </HostWrapper>
        </BaseButton>
        <BaseButton grayBackground>
            <LangCurr>
                <EarthSvgWrapper>
                    <EarthSvg />
                </EarthSvgWrapper>
                <BottomSvg />
            </LangCurr>
        </BaseButton>
    </MainWrapper>
    )
}

export default MainBlock
