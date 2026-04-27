import cn from 'classnames';
import styles from './Book.module.css';
import {useTheme} from "shared/hooks/useTheme";
import { PageLayout } from "components/PageLayout/PageLayout";
import { useAppSelector } from "app/store";

export const Book = () => {
  const {theme} = useTheme();

  const {book: {name, description, publisher}} = useAppSelector(state => state.book);

  const containerStyles = cn({
    [styles.container]: true,
    [styles.containerLight]: theme === 'light',
    [styles.containerDark]: theme === 'dark'
  });
  
  const blockStyles = cn({
    [styles.block]: true,
    [styles.blockLight]: theme === 'light',
    [styles.blockDark]: theme === 'dark'
  });
  
  return (
    <PageLayout>
      <div className={containerStyles}>
        <span className={blockStyles}>
          <b>Название</b>
          <div>{name}</div>
        </span>
        <span className={blockStyles}>
          <b>Описание</b>
          <div>{description}</div>
        </span>
        <span className={blockStyles}>
          <b>Автор публикации</b>
          <div>{publisher}</div>
        </span>
      </div>
    </PageLayout>
  )
}
