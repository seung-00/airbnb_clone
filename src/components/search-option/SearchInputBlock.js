import React, { useEffect } from 'react';
import styled from 'styled-components';
import BaseButton from '@/components/common/BaseButton';
import { useDispatch } from 'react-redux';
import { changeSearch, initializeSearch } from '@/modules/search';
import { useHistory } from 'react-router-dom';

const InputButton = styled(BaseButton)`
  border-radius: 32px;
  border: 1px solid transparent;
  position: relative;
  display: flex;
  &:focus-within {
    &::after {
      border-radius: 32px;
      border: 1px solid transparent;
      bottom: 0px;
      content: '';
      position: absolute;
      top: 0px;
      z-index: 0;
      background-color: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
      left: 0px;
      right: 0px;
    }
  }
`;

const ButtonInnerWrapper = styled.div`
  position: relative;
  z-index: 3;
  padding: 17px 30px;
  flex: 1;
  form {
    display: flex;
    flex-direction: column;
  }
`;

const SearchOptionText = styled.div`
  font-weight: 700;
  letter-spacing: 0.3em;
  font-size: 12px;
  line-height: 16px;
  padding-bottom: 2px;
`;

const SearchInput = styled.input`
  border: 0px;
  padding: 0px;
  background: none;
  &:focus {
    outline-width: 0px;
  }
`;

const SearchInputBlock = ({
  form,
  name,
  namePrint,
  inputPlaceholder,
  isFocus,
}) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeSearch({
        form: form,
        key: name, // location, check I/O, guestNum
        value: value,
      })
    );
  };

  // 렌더링될 때 이전 검색 값을 가지고 있지 않도록 초기화
  useEffect(() => {
    dispatch(initializeSearch(form));
  }, []);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    form === 'stay'
      ? history.push('/search-stay')
      : history.push('/search-experience');
  };

  return (
    <>
      <label>
        <InputButton hoverColor={'#EBEBEB'}>
          <ButtonInnerWrapper>
            <form onSubmit={handleSubmit}>
              <SearchOptionText>{namePrint}</SearchOptionText>
              <SearchInput
                placeholder={inputPlaceholder}
                autoFocus={isFocus}
                onChange={handleChange}
                name={name}
              />
            </form>
          </ButtonInnerWrapper>
        </InputButton>
      </label>
    </>
  );
};

export default SearchInputBlock;
