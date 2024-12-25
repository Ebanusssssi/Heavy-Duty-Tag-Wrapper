import React, { useState } from "react";

import { IoCopy } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";



const TextWrapper = () => {
  const [copyStatus, setCopyStatus] = useState(null);  // Статус копирования

  const [inputText, setInputText] = useState("");  // Для хранения текста, введенного пользователем
  const [outputText, setOutputText] = useState("");  // Для хранения итогового HTML

  // Функция для преобразования текста в HTML-разметку
  const handleWrapText = () => {
    let lines = inputText.split("\n");
    let result = [];
    let isList = false;

    lines.forEach((line, index) => {
      line = line.trim();

      // Если строка - это пункт списка
      if (line.startsWith("-")) {
        if (!isList) {
          result.push("<ul>");
          isList = true;
        }
        result.push(`<li>${line.slice(1).trim()}</li>`);
      }
      // Если строка - заголовок
      else if (line) {
        result.push(`<p><b>${line}</b></p>`);
      }
    });

    if (isList) {
      result.push("</ul>");
    }

    setOutputText(result.join("\n")); // Преобразуем массив строк в финальный результат
  };


  // Функция для копирования текста в буфер обмена
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(outputText).then(
      () => {
        setCopyStatus("+"); // Успешное копирование
        setTimeout(() => setCopyStatus(null), 2000); // Сбросить статус через 2 секунды
      },
      (err) => {
        setCopyStatus("-"); // Ошибка при копировании
        setTimeout(() => setCopyStatus(null), 2000); // Сбросить статус через 2 секунды
      }
    );
  };


  return (
    <div className="px-5 h-full w-full bg-black/90 text-white">
      <div className="h-full px-5 py-5 flex flex-col justify-center items-center">
        <div className="my-2 text-center">
          <p className="text-sm text-white/20">Просто текст для заголовкiв "Заголовок"</p>
          <p className="text-sm text-white/20">"-" для пунктiв списку "-Пункт"</p>
        </div>
        <h1 className="mb-2 font-semibold">Огорнути текст в HTML</h1>
        
        {/* Поле ввода текста */}
        <textarea
          rows="10"
          cols="50"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Введiть текст наступним чином:

Заголовок 
-пункт
-пункт
-пункт..."
          className="p-4 text-white mb-4 rounded-md bg-black/30 placeholder-white/20"
        ></textarea>
        
        {/* Кнопка для оборачивания текста */}
        <button onClick={handleWrapText} className="py-2 px-3 bg-[#DB011C] text-white font-semibold mb-5">в HTML</button>

        <h2 className="mb-2 font-semibold">Результат:</h2>

        {/* Поле для вывода обернутого текста */}
        <textarea
          rows="10"
          cols="50"
          value={outputText}
          readOnly
          placeholder="Результат будет отображен здесь..."
          className="p-4 text-white mb-4 rounded-md bg-black/30 placeholder-white/20"
        ></textarea>
        {/* Кнопка для копирования в буфер обмена */}
        <button 
          onClick={handleCopyToClipboard} 
          className="flex items-center gap-2"
        >
          <p>Cкопiювати</p>
          {copyStatus === "+" ? <IoCheckmarkDone  className="text-green-500" /> : <IoCopy />}
        </button>
      </div>
    </div>
  );
};

export default TextWrapper;