import React, {useState} from 'react';
import DatePicker from '../../component/datepicker/datepicker.js';
import './filter.css';

const Filter = () => {
  /*
    toggle 기능이 있는 Container에 필요한 변수, 이벤트 함수 설정
   */
    /* 변수 */
  const [isToggledContainer, setIsToggledContainer] = useState(false); //container

    /* 이벤트 함수 */
  //container
  const toggleContainerHandler = () => {
    setIsToggledContainer(!isToggledContainer);
  };

  //return
  return (
    <div className='filter'>
      {/* filter */}

      <div className={`filterContainer ${isToggledContainer ? "is-toggled" : null}`}>
        {/* Container */}
        <div className='filterHeader'>
          <a className='filterToggleBtn' role='button' onClick={toggleContainerHandler}>
            <h4 className='filterTitle'>관람일</h4>
            <div className='selectedData'>
              <span className='blind'>선택된 일자:</span>
              <span className='date'>1234</span>
            </div>
          </a>
        </div>

        <DatePicker />
      </div>

    </div>
    
  );
};
export default Filter;