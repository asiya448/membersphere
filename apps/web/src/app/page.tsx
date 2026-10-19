/* oxlint-disable jsx-a11y/prefer-tag-over-role -- the icons below
   are inline SVGs, which have no tag to swap the role for. */
import styles from './page.module.scss';
import WebHome from '../features/components/home/Webhome';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      
    <div className="wrapper">
      <div className="container">
       <WebHome />
      </div>
    </div>
  
    </div>
  );
};
