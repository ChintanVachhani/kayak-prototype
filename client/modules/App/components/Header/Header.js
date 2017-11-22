import React, { PropTypes } from 'react';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        {
          context.router.isActive('/', true)
            ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}>+</a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
};

export default Header;
