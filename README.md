# Лабораторная работа №20. Работа с DOM и событиями в JavaScript

## Основная информация
- **ФИО:** Щербаков Данил Николаевич
- **Группа:** ИСП-232
- **Дата:**  17.03.2026

## Краткое описание работы
Цель лабораторной работы — научиться работать с DOM-деревом, освоить поиск HTML-элементов из JavaScript, научиться изменять содержимое страницы, освоить обработку событий пользователя и создать простой TODO-лист.

## Описание (что изучили)
В ходе выполнения лабораторной работы были изучены следующие темы:
1. **DOM (Document Object Model):** Объектная модель HTML-документа в виде древовидной структуры.
2. **Поиск элементов:** Использование методов `getElementById` и `querySelector`.
3. **Манипуляции с DOM:** Изменение текста, HTML-разметки, атрибутов и CSS-стилей элементов.
4. **События (Events):** Обработка кликов, ввода текста, отправки форм через `addEventListener`.
5. **Работа с формами:** Получение данных из `input`, валидация данных, предотвращение стандартной отправки формы.
6. **Динамическое создание элементов:** Использование `createElement`, `appendChild`, делегирование событий.

## Структура проекта
```text
Lab20_DOM_Events_FIO/
├── README.md
├── index.html
├── style.css
├── main.js
├── dynamicElements.html
├── dynamicElements.js
└── img/
    ├── gitPushLab20_DOM_Events_FIO.png
    ├── step2_domStructureLab20_FIO.png
    ├── step3_domSelectionLab20_FIO.png
    ├── step4_domManipulationLab20_FIO.png
    ├── step5_clickEventLab20_FIO.png
    ├── step6_inputEventLab20_FIO.png
    ├── step7_miniTaskLab20_FIO.png
    ├── step8_formInputLab20_FIO.png
    ├── step9_formValidationLab20_FIO.png
    └── step10_dynamicElementsLab20_FIO.png
```
## Сравнение с C# (WinForms/WPF)
### DOM в JS = Controls в C# WinForms

| Концепция | C# (WinForms) | JavaScript (DOM) |
|-----------|---------------|------------------|
| Найти элемент | `Button myButton = this.Controls["myButton"]` | `const myButton = document.getElementById("myButton")` |
| Изменить текст | `label1.Text = "Новый текст"` | `label.textContent = "Новый текст"` |
| Добавить обработчик | `button1.Click += HandleClick` | `button.addEventListener("click", handleClick)` |
| Создать элемент | `Button btn = new Button()` | `const btn = document.createElement("button")` |
| Добавить в контейнер | `panel1.Controls.Add(btn)` | `panel.appendChild(btn)` |
| Скрыть элемент | `button1.Visible = false` | `button.style.display = "none"` |

## Events в JS = События в C#

### C# (WinForms):
```csharp
private void Button1_Click(object sender, EventArgs e)
{
    label1.Text = "Нажато!";
}
```
### JavaScript (DOM):
```js
button.addEventListener("click", (e) => {
    label.textContent = "Нажато!";
});
```
## Валидация формы
### C# (WinForms):
```csharp
private void SubmitButton_Click(object sender, EventArgs e)
{
    if (string.IsNullOrEmpty(nameTextBox.Text))
    {
        MessageBox.Show("Введите имя!");
        return;
    }
    // ...
}
```
### JavaScript (DOM):
```js
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (!nameInput.value.trim()) {
        alert("Введите имя!");
        return;
    }
    // ...
});
```
## Главные отличия:

| Аспект | C# WinForms | JavaScript DOM |
|--------|-------------|----------------|
| Компиляция | Да | Нет (интерпретация) |
| Типизация | Строгая | Динамическая |
| Ошибки | Во время компиляции | Во время выполнения |
| UI-дизайнер | Есть (визуальный) | Нет (только код) |
| Платформа | Windows | Любой браузер |
