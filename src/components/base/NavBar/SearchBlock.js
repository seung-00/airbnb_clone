import React from 'react'
import styled from 'styled-components';
import {ReactComponent as SearchSVG} from '../../../svg/serach_button.svg';
import BaseButton from '../../common/BaseButton';

const SearchWrapper = styled.div`
    width: 290px;
    display: flex;
`

const SearchSVGWrapper = styled.div`
    background-color: rgb(255, 56, 92);
    border-radius: 50%;
    height: 15px;
    margin: 7px 7px 7px 0;
    padding: 10px;
    width: 12px;
    svg {
        width:5px;
    }
`

// text에만 flex-glow 1을 줘서 자리를 차지하도록 한다.
const SearchText = styled.div`
    font-size: 14px;
    flex: 1 1 auto;
    padding: 0 16px;
`

const SearchButton = styled(BaseButton)`
    width: 290px;
    height: 48px;
`

const SearchBlock = () => {
    return (
        <SearchWrapper>
            <SearchButton border shadow>
                <SearchText>
                    검색 시작하기
                </SearchText>
                <SearchSVGWrapper>
                    <SearchSVG />
                </SearchSVGWrapper>
            </SearchButton>
        </SearchWrapper>
    )
}

export default SearchBlock



