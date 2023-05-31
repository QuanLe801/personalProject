import styles from './ContainerWrapper.module.scss';

interface containerWrapper {
  children: React.ReactNode;
  full?: boolean;
}

function ContainerWrapper({ children, full = false }: containerWrapper) {
  return (
    <div className={`${styles.wrapper}${full ? ` ${styles.full}` : ''}`}>
      {children}
    </div>
  );
}

export default ContainerWrapper;
