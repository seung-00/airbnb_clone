import React from 'react'
import styled from 'styled-components';

const StyledSearch = styled.input`
    padding: 0;
    font-size: 1rem;
    border-radius: 15px;
    width: 300px !important;
    height: 48px !important;
`

const SearchBar = () => {
    return (
        <form>
            <StyledSearch placeholder="검색 시작하기" />
        </form>
    )
}

export default SearchBar



