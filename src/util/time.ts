export const todayTime = () => {
    
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1 ;
    let todayDate = now.getDate();

    const week = ["SUN" , 'MON' , 'TUE' , 'WED' , 'THU' , 'FRI' , 'SAT']
    let dayOfWeek = week[now.getDay()];


    return { now , todayYear , todayMonth , todayDate , dayOfWeek}

}