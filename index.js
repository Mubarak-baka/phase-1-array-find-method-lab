function superbowlWin(record){
    const marks=[
    {year:'2015',result:"W"},
    {year:'2016',result:'N/A'},
    {year:'2013',result:'L'}
    ]     
 const win = record.find(mark=>mark.result === "W");
        return win ? win.year : undefined;
}



