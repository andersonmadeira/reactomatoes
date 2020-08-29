import React, { useContext, useEffect, useState } from 'react'
import classnames from 'classnames'
import { StateContext } from '../state'
import { actionFavoriteAdd, actionFavoriteRemove } from '../state/action-creators'
import { HeartFilledIcon, HeartIcon } from '../Icons'
import styles from '../styles/FavoriteButton.module.scss'

const FavoriteButton = ({ movie, favorite, label, style, iconClassName }) => {
  const { dispatch } = useContext(StateContext)
  const [isFavorite, setIsFavorite] = useState(favorite)

  useEffect(() => {
    setIsFavorite(favorite)
  }, [favorite])

  return (
    <button
      style={style}
      className={classnames(
        styles.movie__favorite_icon,
        isFavorite ? styles.movie__favorite_icon__favorite : '',
        label ? styles.movie__favorite_icon__labeled : ''
      )}
      type="button"
      onClick={() => {
        if (isFavorite) {
          dispatch(actionFavoriteRemove(movie))
        } else {
          dispatch(actionFavoriteAdd(movie))
        }
      }}
    >
      {isFavorite ? (
        <HeartFilledIcon className={classnames(iconClassName, styles.favorite_icon__icon)} />
      ) : (
        <HeartIcon className={classnames(iconClassName, styles.favorite_icon__icon)} />
      )}
      <span className={styles.favorite_icon__label}>{label}</span>
    </button>
  )
}

export default React.memo(FavoriteButton)
