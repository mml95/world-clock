function updateTime() {
  // london
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM D, YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM D, YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  // new-york
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM D, YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // reykjavik
  let reykjavikElement = document.querySelector("#reykjavik");
  let reykjavikDateElement = reykjavikElement.querySelector(".date");
  let reykjavikTimeElement = reykjavikElement.querySelector(".time");
  let reykjavikTime = moment().tz("Atlantic/Reykjavik");

  reykjavikDateElement.innerHTML = reykjavikTime.format("MMMM D, YYYY");
  reykjavikTimeElement.innerHTML = reykjavikTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // lagos
  let lagosElement = document.querySelector("#lagos");
  let lagosDateElement = lagosElement.querySelector(".date");
  let lagosTimeElement = lagosElement.querySelector(".time");
  let lagosTime = moment().tz("Africa/Lagos");

  lagosDateElement.innerHTML = lagosTime.format("MMMM D, YYYY");
  lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
