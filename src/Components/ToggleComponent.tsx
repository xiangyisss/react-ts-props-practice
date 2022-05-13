import React, { useEffect, useRef, useState } from 'react';

export const Toggle = () => {
  const [checked, setCheck] = useState(false);
  const firstRender = useRef(true);

  const styleChecked = (status: boolean) => {
    status
      ? console.log('This is checked')
      : console.log('This is not checked');
  };

  const storeBeforeMounted = () => {
    firstRender.current = false;
    return;
  };
  useEffect(() => {
    // if (firstRender.current) {
    //   firstRender.current = false;
    //   return;
    // }
    firstRender.current && storeBeforeMounted();
    styleChecked(checked);
  }, [checked]);

  return (
    <div>
      <p>This is toggle practice component</p>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => setCheck(!checked)}
      />
    </div>
  );
};
