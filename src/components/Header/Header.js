import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LaptopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </LaptopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>
            Subscribe
          </Button>
          <SubscribeLink href="/">
            Already a subscriber?
          </SubscribeLink> 
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const LaptopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`
const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;
  
  @media ${QUERIES.laptopAndUp} {
    justify-self: end;
    align-self: end;

    display: grid;
    gap: 8px;
    justify-items: center;
  }
`

const SubscribeLink = styled.a`
  font-size: 0.875rem;
  color: ${COLORS.gray[400]};
  text-decoration: underline;
  font-style: italic;
  font-weight: ${WEIGHTS.normal};
`
export default Header;
