import { useState } from "react";

export const useTime = () => {

const [now, setNow] = useState(new Date());

    const todayTime = () => {
        let todayYear = now.getFullYear();
        let todayMonth = now.getMonth() + 1 ;
        let todayDate = now.getDate();
        const week = ["SUN" , 'MON' , 'TUE' , 'WED' , 'THU' , 'FRI' , 'SAT']
        let dayOfWeek = week[now.getDay()];
    return { now , todayYear , todayMonth , todayDate , dayOfWeek}
}

  // 날짜를 하루 감소
  function DayMinus() {
    setNow((prevDate:any) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() - 1);
      return newDate;
    });
  }

  // 날짜를 하루 증가
  function DayPlus() {
    setNow((prevDate:any) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + 1);
      return newDate;
    });
  }

  // 현재 날짜를 yyyy-mm-dd 형식으로 변환
  const formatDate = (date: any):string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return {
    DayMinus,
    DayPlus,
    formatDate,
    todayTime,
    now
  }
  
}

