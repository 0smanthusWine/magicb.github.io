//Список предсказаний//
const predictions = [ "Да", "Нет", "Возможно", "Скорее всего", "Мало вероятно", "Спроси позже", "Не могу сказать", "Определенно да", "Определенно нет",
    "Вероятно", "Шансы высоки", "Шансы низки", "Звезды говорят - ДА", "Звезды говорят - нет", "Будь осторожен", "Дествуй смело", 
    "Все будет хорошо", "Жди перемен", "Не торопись", "Ты уже знаешь ответ", "Подумай еще", "Абсолютно точно","Весьма сомнительно",
    "Мой ответ- да", "Мой ответ - нет", "Сегодня - твой день", "Лучше не рисковать" ];

const ball = document.getElementById('ball');
const predictionEl = document.getElementById('prediction');
const questionInput = document.getElementById('questionInput');
const shakeBtn = document.getElementById('shakeBtn');

let isShaking = false;

//Получение предсказания//
function getRandomPrediction() {
    const randomIndex = Math.floor(Math.random() * predictions.length);
    return predictions[randomIndex];
}

//Тряска//
function shakeBall() {
    if(isShaking) return; //чтоб повторно при анимации не было тряски
    
    const question = questionInput.value.trim();
   /*
   обязательный ввод вопроса
   if (question === '') {
    // Показываем сообщение
    predictionEl.textContent = ' Введите вопрос!';
    setTimeout(() => {
        predictionEl.textContent = '?';
    }, 1500);
    return; 
    }   */

    isShaking = true;
    shakeBtn.disabled = true;

    //запуск анимации тряски
    ball.classList.add('shake');
    //затемнение текста
    predictionEl.classList.add('fade-text');

    //Через 0.6сек, когда аним. закончится, меняем текст и убираем классы
    setTimeout(() => {
        //новое предсказание
        predictionEl.textContent = getRandomPrediction();

        //убираем анимацию и затемнение
        ball.classList.remove('shake');
        predictionEl.classList.remove('fade-text');

        isShaking = false;
        shakeBtn.disabled = false;
    }, 600);
}

//клик по шару
ball.addEventListener('click', shakeBall);
//клик по кнопке
shakeBtn.addEventListener('click', shakeBall);
//нажетие enter в поле ввода
questionInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        e.preventDefault();
        shakeBall();
    }
});
 console.log('Магический шар готов! Задай вопрос и нажми на шар.');
