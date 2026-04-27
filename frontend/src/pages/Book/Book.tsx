import cn from 'classnames';
import styles from './Book.module.css';
import {useTheme} from "shared/hooks/useTheme";
import { PageLayout } from "components/PageLayout/PageLayout";
import { useAppSelector } from "app/store";
import { isAdmin } from 'shared/utils/check';
import { DeleteBook } from 'components/DeleteBook/DeleteBook';
import { EditBook } from 'components/EditBook/EditBook';

export const Book = () => {
  const {theme} = useTheme();

  const {user} = useAppSelector(state => state.auth);
  const {book: {name, description, publisher, id}} = useAppSelector(state => state.book);

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

  const renderAdminPanel = () => {
    return !!user && isAdmin(user) 
        ? <div>
            <EditBook id={id} />
            <DeleteBook id={id}/> 
          </div>
        : null
  }
  
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
        {renderAdminPanel()}
      </div>
    </PageLayout>
  )
}
