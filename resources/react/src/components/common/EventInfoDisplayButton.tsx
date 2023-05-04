import { useState } from 'react';

const EventInfoDisplayButton = () => {
  const [buttonText, setButtonText] = useState('開催情報をすべて非表示');
  const [eventInfoDisplay, setEventInfoDisplay] = useState(false);

  const onClickEventInfoDisplay = () => {
    // console.log('click');
    let eventInfoList = document.getElementsByClassName('event-info');
    let className = 'event-info';

    if (!eventInfoDisplay) {
      className = className + ' hidden';
    }

    for (let i = 0; i < eventInfoList.length; i++) {
      let eventInfoEl = eventInfoList[i];
      eventInfoEl.className = className;
    }

    setButtonText('開催情報をすべて表示');
    setEventInfoDisplay(!eventInfoDisplay);
  };

  return (
    <div className={'event-info-display-button-wrap'} onClick={onClickEventInfoDisplay}>
      <button className={'btn btn-active btn-primary'}>{buttonText}</button>
    </div>
  );
};

export default EventInfoDisplayButton;
