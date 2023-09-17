let CurrentLevel;                                                                // การกำหนดค่าสำหรับเก็บ ระดับ level ที่ user กด

function LevelSelect(level) {                                                    // function สำหรับ ปุ่ม บน html โดยรับ parameter คือ id ของปุ่ม
    const buttons = document.getElementsByClassName("Level-select")[0].children; // เราจะเรียก ปุ่มมาใช้ด้วย id ด้วย api นี้ getelementbyid 
    for (let i = 0; i < buttons.length; i++) {                                   // เป็นการใช้ for loop เพื่อ responsive button
        buttons[i].classList.remove("btn-active");
    }

    CurrentLevel = level;                                                        // การกำหนดตัวแปรให้กับตัวแปร Currentlevel โดยเอาค่ามาจาก parameter
    let btn_active = document.getElementById(level);
    btn_active.classList.add("btn-active");                                      // เป็นการเพิ่ม class ให้ปุ่ม เพื่อ responsive button
}


document.addEventListener('DOMContentLoaded', function() {                       // เป็น api สำหรับการทำทุกอย่างบนเว็ปไซต์
    document.getElementById('StartQuiz').addEventListener('click', StartQuiz);   // เราจะเรียก ปุ่มมาใช้ด้วย id ด้วย api นี้ getelementbyid และ ใช้ addEventListener ในการรับการคลิกบนปุ่ม และ ใช้ function StartQuiz()
});
function StartQuiz() {                                                           // function สำหรับการย้ายหน้าเว็ปไซต์ และ ส่งค่า Currentlevel ไปอีกหน้า
    if (CurrentLevel) {                                                          // ใช้ if เช็คว่าค่า Currentlevel มีค่า ไม่ใช่ค่า undefined หรือ null
        localStorage.setItem('currentLevel', CurrentLevel);                      // การเก็บค่า Currentlevel ไว้ใน localStorage เพื่อให้อีกหน้าสามารถมาดึงค่าไปใช้ได้
        window.location.href = './Pages/quiz.html'                               // การส่งให้ user ไปอีกเว็ป โดยใช้ window.location บอกตำแหน่ง
    }
}