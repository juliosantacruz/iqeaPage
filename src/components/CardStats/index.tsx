import React from 'react'
import stats_1 from '@/assets/stats/stats1.svg'
import stats_2 from '@/assets/stats/stats2.svg'
import stats_3 from '@/assets/stats/stats3.svg'
import Image from 'next/image'

import './CardStats.scss'

export default function CardStats({data}:any) {
    console.log(data)
    
    const title = data.title
    const subtitle = data.subtitle
    const image = data.image
  return (
    <article className='statsCard'>
        <div className="image">
          <Image src={image} alt='' height={120} width={120}/>
        </div>
        
          <div className="title">
          <h2>{title}</h2>
          </div>
          <div className="subtitle">
            <p>{subtitle}</p>
          </div>
        
      </article>
  )
}
