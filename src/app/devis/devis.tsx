import styles from './devis.module.css';
import createClassTransformer from '../style-utils';

export default function Devis() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout devis-container")}></div>
    </>
  );
}
