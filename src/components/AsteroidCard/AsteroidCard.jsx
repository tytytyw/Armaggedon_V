import React, {useState} from 'react'
import './AsteroidCard.css'

function AsteroidCard({item, distanceDisplay}) {

    const state = {
        date: new Date(item['close_approach_data'][0]['epoch_date_close_approach']).toLocaleString('ru', {day:'numeric', month:'long',year:'numeric'}),
        distanceKM: Math.round(+item['close_approach_data'][0]['miss_distance']['kilometers'])+" км",
        distanceLunar: (+item['close_approach_data'][0]['miss_distance']['lunar']).toFixed(1)+" раз до луны",
        size: Math.round(item['estimated_diameter']['meters']['estimated_diameter_max']),
        isDanger: item['is_potentially_hazardous_asteroid']
    }
    // формула подчета размера астероида и его смещения
    const CalcAasteroidBg  = {
        backgroundSize: state.size - state.size/3,
        backgroundPositionY: function() {return -this.backgroundSize + Math.sqrt(this.backgroundSize) + 100},
        backgroundPositionX: function() {return -this.backgroundSize + Math.sqrt(this.backgroundSize)*21}
    }
    // console.log(item['close_approach_data'][0])
    const style = {
        backgroundSize: CalcAasteroidBg.backgroundSize,
        backgroundPositionY: CalcAasteroidBg.backgroundPositionY(),
        backgroundPositionX: CalcAasteroidBg.backgroundPositionX()
    }
    return (
        <div className= {state.isDanger ? "bg-gradient bg-gradient_danger" : "bg-gradient"}>
            <div style={style} className='ast-card'>
                <div className="ast-card__start">
                </div>

                <div className="ast-card__medium">
                    <h2 title={`подробнее об ${item.name}`} className="ast-card__name">
                        {item.name}
                    </h2>
                    <div className="ast-card__decr-item ast-card__decr_date">
                        <span className="ast-card__decr-title">Дата</span>
                        <span className="ast-card__decr-dots"></span>
                        <span className="ast-card__decr-value">{state.date.slice(0, -3)}</span>
                    </div>
                    <div className="ast-card__decr-item ast-card__decr_dist">
                        <span className="ast-card__decr-title">Расстояние</span>
                        <span className="ast-card__decr-dots"></span>
                        <span className="ast-card__decr-value">{distanceDisplay === 'km' ? state.distanceKM : state.distanceLunar}</span>
                    </div>
                    <div className="ast-card__decr-item ast-card__decr-size">
                        <span className="ast-card__decr-title">Размер</span>
                        <span className="ast-card__decr-dots"> </span>
                        <span className="ast-card__decr-value">{state.size} м</span>
                    </div>
                </div>

                <div className="ast-card__end">
                    <p className="ast-card__evaluate-title">Оценка: </p>
                    <p className="ast-card__evaluate-value">{state.isDanger ? "Опасен" : "Не опасен"}</p>
                    <button data-id={item.id} className='ast-card__destroy-btn'>На уничтожение</button>
                </div>
            </div>
        </div>
    )
}

export default AsteroidCard