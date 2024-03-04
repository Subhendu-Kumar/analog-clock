document.addEventListener("DOMContentLoaded", function () {
  const hour_hand = document.querySelector(".hour-hand");
  const minute_hand = document.querySelector(".minute-hand");
  const second_hand = document.querySelector(".second-hand");

  setInterval(() => {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let hour_hand_rotate = 30 * hour + minute / 2;
    let minute_hand_rotate = 6 * minute;
    let second_hand_rotate = 6 * second;

    hour_hand.style.transform = `rotate(${hour_hand_rotate}deg)`;
    minute_hand.style.transform = `rotate(${minute_hand_rotate}deg)`;
    second_hand.style.transform = `rotate(${second_hand_rotate}deg)`;
  }, 1000);
});
