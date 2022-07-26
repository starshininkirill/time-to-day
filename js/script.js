let dateEnd = new Date(2022,06,29,00,00,00)

setInterval(newDate,500)

function newDate(){
   let dateToday = new Date()
   gap = dateEnd - dateToday
   let days = Math.floor(gap / 1000/60/60/24)
   let hours = Math.floor( gap / 1000 / 60/ 60) % 24;
   let minut = Math.floor( gap / 1000 / 60) % 60;
   let second = Math.floor( gap / 1000) % 60;

   console.log(days);
   document.getElementById('d').innerHTML = `${days}д: `
   document.getElementById('h').innerHTML = `${hours}ч:`
   document.getElementById('m').innerHTML = `${minut}м:`
   document.getElementById('s').innerHTML = `${second}с`
}




