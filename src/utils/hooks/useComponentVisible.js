import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    // ref 컴포넌트가 event 타겟을 포함하고 있지 않다면
    if (ref.current && !ref.current.contains(e.target)) {
      setIsComponentVisible(false);
      console.log('끄자');
      console.log(ref);
    }
  };

  useEffect(() => {
    // 최상위 DOM 객체에 이벤트 리스너 추가
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return [ref, isComponentVisible, setIsComponentVisible];
}
