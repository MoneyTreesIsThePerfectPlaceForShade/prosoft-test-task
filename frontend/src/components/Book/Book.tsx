import { Props } from "./types"
import cn from 'classnames';
import styles from './Book.module.css';
import {useTheme} from "shared/hooks/useTheme";

export const Book = ({name, description, publisher}: Props) => {
  const {theme} = useTheme();

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
  )
}
