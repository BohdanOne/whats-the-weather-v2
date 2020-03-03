import React from 'react';
import { ISectionHeaderProps } from '../../types';

const SectionHeader: React.FC<ISectionHeaderProps> = ({
  title,
  titleSpan
}) => {
  return (
    <h2 className='l-section__header'>
      {title}:{' '}
      <span className='l-section__header--bold'>{titleSpan}</span>
    </h2>
  );
};

export default SectionHeader;
