import React from 'react';
import styles from './filter.module.css';

type Props = {
  filterByName: void => null,
  filterByState: void => null,
};

const FilterWorkflows = (props: Props) => {
  return (
    <div>
      <div className={styles.label}>Search</div>
      <input
        onChange={(e) => props.filterByName(e.target.value)}
        placeholder="Search by workflow name"
        className={styles.search} type="text"
      />
      <div className={styles.label}>Filter</div>
      <select onChange={(e) => props.filterByState(e.target.value)}>
        <option value="">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  )
};

export default FilterWorkflows;
