import React from 'react';
import { create } from "react-test-renderer";
import SeriesHeader from './SeriesHeader';

it('renders without crashing', () => {
    const seriesHeader = create(<SeriesHeader />);
  expect(seriesHeader.toJSON()).toMatchSnapshot()
});
