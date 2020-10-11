import React from 'react';
import styles from './filter.module.css';

type Props = {

};

const FilterWorkflows = (props: Props) => {
  return (
    <div>
      <div className={styles.label}>Search</div>
      <input placeholder="Search by workflow name" className={styles.search} type="text" />
      <div className={styles.label}>Filter</div>
      <select>
        <option>All</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>
    </div>
  )
};

export default FilterWorkflows;
