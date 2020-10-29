import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { respondTo } from '@/components/utils/mixins';

const SearchForm = styled.form`
  margin: 0 auto !important;
  max-width: 850px !important;
`;

const SearchSet = styled.fieldset`
  border: 0px !important;
  margin: 0px !important;
  padding: 0px !important;
`;

const SearchTabList = styled.div`
  .tab-text {
    ${respondTo.desktop`
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      padding: 10px 16px !important;
    `}
  }

  align-items: center;
  display: flex;
  justify-content: center;
  height: 80px;
`;

const SearchTab = styled.label`
  #search-tab-STAYS {
    appearance: none;
    cursor: pointer;
  }
  #search-tab-EXPERIENCES {
    appearance: none;
  }
  span {
    &.tab-text {
      cursor: pointer;
    }
  }
`;

const SearchBlock = () => {
  return (
    <SearchForm>
      <SearchSet>
        <SearchTabList role="tablist" aria-label="무엇을 찾고 계신가요?">
          <SearchTab for="search-tab-STAYS">
            <input
              id="search-tab-STAYS"
              role="tab"
              type="radio"
              aria-selected="false"
            />
            <span className="tab-text">숙소</span>
          </SearchTab>
          <SearchTab for="search-tab-EXPERIENCES">
            <input
              id="search-tab-EXPERIENCES"
              role="tab"
              type="radio"
              aria-selected="false"
            />
            <span className="tab-text">체험</span>
          </SearchTab>
          <Link to="/" /* s/experiences/online */ className="tab-text">
            온라인 체험
          </Link>
        </SearchTabList>
      </SearchSet>
    </SearchForm>
  );
};

export default SearchBlock;
