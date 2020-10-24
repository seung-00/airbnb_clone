import React from 'react'
import styled from 'styled-components';
import {ReactComponent as SearchSVG} from '../../../svg/serach_button.svg';

const SearchWrapper = styled.div`
    align-items: center !important;
    background-color: #FFFFFF !important;
    border: 1px solid #DDDDDD !important;
    border-radius: 24px !important;
    display: flex !important;
`

const SearchButton = styled.button`
    display: flex !important;
    border-radius: inherit !important;
    background: transparent !important;
    border: 1px solid transparent !important;
    width: 290px;
    height: 46px;
    text-align: inherit !important;
    align-items: center;
    cursor: pointer !important;
    font-weight: inherit !important;
`
const SearchSVGWrapper = styled.div`
    background-color: rgb(255, 56, 92) !important;
    border-radius: 50% !important;
    height: 15px !important;
    margin: 7px 7px 7px 0 !important;
    padding: 10px !important;
    width: 12px !important;
    svg {
        width:5px;
    }
`

// text만 flex 1 둬서 자리 차지하도록 함
const SearchText = styled.div`
    font-size: 14px !important;
    flex: 1 1 auto !important;
    padding: 0 16px !important;
`

const SearchBar = () => {
    return (
        <SearchWrapper>
            <SearchButton>
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

export default SearchBar



