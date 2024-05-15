document.getElementById('themeToggle').addEventListener('click', function() {
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
    } else {
        document.body.className = 'light-theme';
    }
});

const formtwo = document.getElementById("formatwo");
formtwo.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("exampleInputAmount").value;

    if (email.trim() === '') {
        alert("Пожалуйста, введите свой адрес электронной почты, чтобы подписаться!");
    } else {
        alert("Вы успешно подписались на нашу рассылку новостей!");
    }
});


const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert("Пожалуйста, заполните все поля перед отправкой формы!");
        } else {
            const data = {
                name,
                email,
                message,
            };
            alert("Сообщение отправлено!");
        }
});

document.querySelector('.btn-default').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'block';
});

document.querySelector('.close-popup').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
});

