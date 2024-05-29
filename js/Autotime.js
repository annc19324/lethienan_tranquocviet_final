// document.addEventListener('DOMContentLoaded', function() {
//     function countdownTo(targetDate, daysElement, hoursElement, minutesElement, secondsElement) {
//         const interval = setInterval(updateCountdown, 1000);

//         function updateCountdown() {
//             const now = new Date().getTime();
//             const timeDifference = targetDate.getTime() - now;

//             if (timeDifference < 0) {
//                 clearInterval(interval);
//                 // Xử lý khi thời gian đếm ngược đã kết thúc (nếu cần)
//                 return;
//             }

//             let seconds = Math.floor((timeDifference / 1000) % 60);
//             let minutes = Math.floor((timeDifference / 1000 / 60) % 60);
//             let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
//             let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//             // Cập nhật các phần tử HTML
//             daysElement.innerText = days < 10 ? '0' + days : days;
//             hoursElement.innerText = hours < 10 ? '0' + hours : hours;
//             minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
//             secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;
//         }
//     }

//     // Lấy ngày mục tiêu từ người dùng (ví dụ: 1/6/2024 00:00:00)
//     const targetDate = new Date('2024-06-01T00:00:00');

//     // Lấy các phần tử HTML để cập nhật đếm ngược
//     const daysElement1 = document.querySelector('.flashsales-set_days');
//     const hoursElement1 = document.querySelector('.flashsales-set_hours');
//     const minutesElement1 = document.querySelector('.flashsales-set_minutes');
//     const secondsElement1 = document.querySelector('.flashsales-set_seconds');

//     const daysElement2 = document.querySelector('.categories-time__days__content');
//     const hoursElement2 = document.querySelector('.categories-time__hours__content');
//     const minutesElement2 = document.querySelector('.categories-time__minutes__content');
//     const secondsElement2 = document.querySelector('.categories-time__seconds__content');

//     // Bắt đầu đếm ngược
//     countdownTo(targetDate, daysElement1, hoursElement1, minutesElement1, secondsElement1);
//     countdownTo(targetDate, daysElement2, hoursElement2, minutesElement2, secondsElement2);
// });

document.addEventListener('DOMContentLoaded', function(){
    function countdown(time_future1, dayhtml, hourhtml, minutehtml, secondhtml){
        const interval = setInterval(update_time, 1000);
        function update_time(){
            const nowtime = new Date().getTime();
            const remaintime = time_future1.getTime() - nowtime;

            if(remaintime < 0){
                clearInterval(interval);
                return;
            }

            let second_calc = Math.floor((remaintime / 1000) % 60);
            let minute_calc = Math.floor((remaintime / 1000 / 60) % 60);
            let hour_calc = Math.floor((remaintime / (1000 * 60 * 60)) % 24);
            let day_calc = Math.floor(remaintime / (1000 * 60 * 60 * 24));
            
            dayhtml.innerText = day_calc < 10? '0'+ day_calc : day_calc;
            hourhtml.innerText = hour_calc < 10? '0'+ hour_calc : hour_calc;
            minutehtml.innerText = minute_calc < 10? '0'+ minute_calc :minute_calc;
            secondhtml.innerText = second_calc < 10? '0'+ second_calc : second_calc;
        }
    }

    const time_future1 = new Date('2024-06-01T00:00:00');
    const day1 = document.querySelector('.flashsales-set_days');
    const hour1 = document.querySelector('.flashsales-set_hours');
    const minute1 = document.querySelector('.flashsales-set_minutes');
    const second1 = document.querySelector('.flashsales-set_seconds');

    countdown(time_future1, day1, hour1, minute1, second1);

})