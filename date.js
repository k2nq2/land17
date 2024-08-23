function newDate() {
    var time = new Date();
    var date_now =  new Date();
    date_now.setDate(date_now.getDate() + 1);
    $(".date-block").text(date_now.toLocaleString('uk-ua', {
      day: 'numeric',
      month: 'long' 
    }));
  }
  setTimeout(newDate, 100);
  
  var myDate = new Date();
  function returnEndDate(d,h,m){
    myDate.setDate(myDate.getDate()+d);
    myDate.setHours(myDate.getHours()+h);
    myDate.setMinutes(myDate.getMinutes()+m);
    return myDate;
  }