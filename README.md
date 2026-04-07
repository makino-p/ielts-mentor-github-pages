# 🎯 IELTS Mentor — GitHub Pages Edition

Full-featured IELTS preparation website. **100% static — no server needed.** Deploys directly to GitHub Pages in under 5 minutes.

## ✨ Features
- 📊 Dashboard with band score estimate, XP, and streak tracker  
- 📅 12-week study schedule  
- 📚 6 course modules, 20+ lessons  
- ✏️ Practice exercises (Grammar, Listening, Reading, Vocabulary)  
- 💬 Vocabulary builder (40 IELTS words with flashcards)  
- 🤖 AI Chat tutor (built-in smart replies, no API key needed)  
- 📱 Fully mobile-responsive  
- 💾 Progress saved in browser (localStorage)

---

## 🚀 Deploy to GitHub Pages — Step by Step

### Шаг 1. Создайте аккаунт на GitHub
Зайдите на **github.com** и зарегистрируйтесь (бесплатно).

---

### Шаг 2. Создайте новый репозиторий
1. Нажмите **"+"** (вверху справа) → **"New repository"**
2. **Repository name:** `ielts-mentor` *(или любое название)*
3. Выберите **Public** ✅
4. Нажмите **"Create repository"**

---

### Шаг 3. Загрузите файлы

**Вариант A — через браузер (самый простой):**
1. На странице репозитория нажмите **"uploading an existing file"** или **"Add file → Upload files"**
2. Перетащите ВСЕ 3 файла (`index.html`, `app.js`, `data.js`) в окно
3. Внизу нажмите **"Commit changes"**

**Вариант B — через терминал:**
```bash
git init
git add .
git commit -m "IELTS Mentor launch"
git remote add origin https://github.com/ВАШ_ЛОГИН/ielts-mentor.git
git branch -M main
git push -u origin main
```

---

### Шаг 4. Включите GitHub Pages
1. Зайдите в репозиторий → вкладка **"Settings"** (шестерёнка)
2. В левом меню нажмите **"Pages"**
3. В разделе **"Source"** выберите:
   - Branch: **main**
   - Folder: **/ (root)**
4. Нажмите **"Save"**
5. Подождите 1–2 минуты

✅ Ваш сайт будет доступен по адресу:  
**`https://ВАШ_ЛОГИН.github.io/ielts-mentor`**

---

## 📁 Структура файлов (всего 3 файла!)

```
ielts-mentor/
├── index.html   ← Весь HTML и CSS интерфейса
├── app.js       ← Вся логика приложения  
└── data.js      ← Уроки, упражнения, словарь
```

---

## 💾 Как хранится прогресс

Прогресс сохраняется в **localStorage** вашего браузера автоматически. Это значит:
- ✅ Работает без интернета после первой загрузки
- ✅ Сохраняется между сессиями
- ⚠️ Привязан к браузеру/устройству (на телефоне и ноутбуке — отдельный прогресс)

---

## 🔧 Добавить свои упражнения

Откройте `data.js` и добавьте объект в нужный массив:

```javascript
// Пример: добавить Grammar упражнение
{ 
  id: "g9", 
  type: "mcq", 
  question: "Ваш вопрос здесь?", 
  options: ["Вариант A", "Вариант B", "Вариант C", "Вариант D"], 
  correct: "Вариант A", 
  explanation: "Объяснение ответа." 
}
```

---

*Удачи на экзамене IELTS! 🎯*
