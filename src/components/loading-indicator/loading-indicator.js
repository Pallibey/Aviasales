import React from 'react'
import { Progress } from 'antd'
import { useSelector } from 'react-redux'

import classes from './loading-indicator.module.scss'

const LoadingIndicator = () => {
  const data = useSelector((state) => state.service.tickets)
  let percent = data.length <= 9500 ? (data.length === 0 ? 0 : data.length / 100) : 99
  const phraseGenerator = (percent) => {
    if (percent <= 25) {
      return 'Ищем рейсы'
    } else if (percent <= 50) {
      return 'Загружаем красивые картинки авиакоманий'
    } else if (percent <= 75) {
      return 'Проверяем достоверность данных'
    } else {
      return 'Последние штрихи, пока можете выбрать фильтры'
    }
  }
  return (
    <div className={classes['loading-indicator']}>
      <Progress type="circle" percent={percent} strokeColor={{ '0%': '#84c3be', '100%': '#2196F3' }} size={100} />
      <figure className="text-center">
        <p className={classes['loading-indicator-text']}>{phraseGenerator(percent)}</p>
      </figure>
    </div>
  )
}

export default LoadingIndicator
