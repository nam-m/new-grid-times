import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportsStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </SportsStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  /* Limit column width to avoid matching the sports stories overflow*/
  @media ${QUERIES.tabletAndUp} {
    gap: 64px;
    grid-template-columns: 100%; /* also works with minmax(0, auto)*/
  }

  /* Align market and sports sections next to each other
  Enable sports stories overflow on the right column*/
  @media ${QUERIES.laptopAndUp} {
    gap: revert;
    grid-template-columns: 1fr minmax(0, 1fr);
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  /* Fluid grid for market cards with min size of 180px */
  display: grid;
  grid-template-columns: 
    repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  /* Fluid grid for sports stories with min size of 180px */
  display: grid;
  grid-template-columns: 
    repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;

  /* Make sports stories overflow and scrollable in tablet and up*/
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    grid-template-columns: revert;
    overflow: auto;
  }
`;

const SportsStoryWrapper = styled.div`
  /* Wrap sports story with min width of 220px */
  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  }
`;
export default SpecialtyStoryGrid;
