import React from 'react';
import './FilterAsteroids.css';

function FilterAsteroids({distanceChange, clickFilter}) {
    return (
        <div className='filter'>
            <div className="filter__danger-wrap">
                <input onChange={clickFilter} type="checkbox" name="filter_danger" id="filter_danger"/>
                <label htmlFor="filter_danger">
                    <span>Показать только опасные</span>
                </label>
            </div>
            <div className="filter__distance-wrap">
                <div className="filter__km-wrap">
                    <span className="filter__distance-title">Расстояние </span>
                    <div onClick={distanceChange} data-value='km' className="filter__item filter__item_active">в километрах, </div>
                </div>
                <div onClick={distanceChange} data-value='lu' className="filter__item">в дистанциях до луны</div>
            </div>
        </div>
    )
}

export default FilterAsteroids
