'use strict';
import React, { useState, useEffect, memo } from 'react';

import './global.css';
import styles from './index.module.css';

export default memo((props) => {
  return (
    <div className={styles.mod}>
      <img
        className={styles.banner}
        index={0}
        src={'./images/img_0.png'}
      />
    </div>
  );
});
