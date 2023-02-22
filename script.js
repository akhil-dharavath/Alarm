setInterval(function() {
  let a = new Date()
  let hr = a.getHours()
  let mi = a.getMinutes()
  let se = a.getSeconds()
  let da = a.getDate()
  let mo = a.getMonth()
  let ye = a.getFullYear()
  let month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  document.getElementById('Hour').innerHTML = String(hr).padStart(2, '0') + ' :'
  document.getElementById('Min').innerHTML = String(mi).padStart(2, '0') + ' :'
  document.getElementById('Sec').innerHTML = String(se).padStart(2, '0')

  document.getElementById('Date').innerHTML = da + (da == 11 ? 'th' : (da % 10 == 1 ? 'st ' : (da % 10 == 2 ? 'nd ' : (da % 10 == 3 ? 'rd ' : 'th '))));
  document.getElementById('Month').innerHTML = month[mo] + ', '
  document.getElementById('Year').innerHTML = ye
}, 1000)


function play() {
  var audio = new Audio('alarm-clock-short-6402.mp3');
  audio.play();
}

function clearsec() {
  byTime.value = ''
}
function cleartime() {
  bySeconds.value = ''
}
function stop() {
  clearTimeout(values);
}

values.addEventListener("click", (e) => {
  e.preventDefault()
  if (bySeconds.value) {
    setTimeout(() => {
      play();
    }, bySeconds.value * 1000)
  }
  bySeconds.value = '';
  if (byTime.value) {
    let ss = byTime.value % 100;
    let mm = Math.floor((byTime.value / 100) % 100);
    let hh = Math.floor((byTime.value / 100) / 100);
    if (hh > 24 || mm > 60 || ss > 60) {
      alert('Invalid Time')
    }
    else {
      var a = new Date()
      var hr = a.getHours()
      var mi = a.getMinutes()
      var se = a.getSeconds()

      let hours = hh - hr;
      let minutes = mm - mi;
      let seconds = ss - se;
      let setIt = 0;
      if (seconds >= 0) {
        setIt = setIt + seconds;
        setTimeout(() => {
          play();
        }, setIt * 1000)
      }
      else {
        if (minutes > 0) {
          setIt = setIt + (60 * minutes) + seconds;
          setTimeout(() => {
            play();
          }, setIt * 1000)
          if (hours > 0) {
            setIt = setIt + (3600 * hours);
            setTimeout(() => {
              play();
            }, setIt * 1000)
          }
        }
        else {
          if (hours > 0) {
            setIt = setIt + (3600 * hours) + seconds;
            setTimeout(() => {
              play();
            }, setIt * 1000)
          }
          else
            alert('Cannot set alarm, entered Alarm time is more than 24 hours')
        }
      }
    }
  }
  byTime.value = ''
})
