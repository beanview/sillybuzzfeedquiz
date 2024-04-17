import React from 'react';
import styled from 'styled-components';

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                BenFeed
            </HeaderContainer>
        </HeaderWrapper>
    )
};

const HeaderWrapper = styled.div`
  height: 64px;
  width: 100%;
  background-color: #fff;
  color: #ee3322;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  width: 100%;
  max-width: 600px;
  font-weight: 700;
  font-size: 2rem;
`;