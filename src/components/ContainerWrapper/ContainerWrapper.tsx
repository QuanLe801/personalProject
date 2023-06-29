import styles from './ContainerWrapper.module.scss';

interface containerWrapper {
  children: React.ReactNode;
  full?: boolean;
  className?: string;
}

function ContainerWrapper({
  children,
  full = false,
  className,
}: containerWrapper) {
  return (
    <div
      className={`${styles.wrapper}${full ? ` ${styles.full}` : ''}${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  );
}

export default ContainerWrapper;
