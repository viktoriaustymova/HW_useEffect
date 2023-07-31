import React, { useEffect, useState } from 'react';

export default function Consultation(): JSX.Element {
  // useEffect ничего не возвращает
  // Принимает функцию - это первый параметр
  // Принимает зависимости - это необязательный паремтр
  // Component lifcycle
  // mount - первая отрисовка - установка === рождение
  // update - обновление - изменение === сама жизнь компонента, когда измения
  // unmount - когда перестает отрисовываться === смерть
  const [numberOfTeeth, setNumberOfTeeth] = useState(0);
  const [url, setUrl] = useState<string>('');

  function handleToothGrowth(): void {
    setNumberOfTeeth(numberOfTeeth + 1);
  }

  const [weight, setWeight] = useState(60);
  function handleTakeWeight(): void {
    setWeight(weight + 5);
  }
  // Пример 1 - пустой массив зависимостей - при первой отрисовке
  useEffect(() => {
    console.log('UseEffect 1 - ');
  }, []);

  // Пример 2 - не указаны зависимости - при первой отрисовке и при любых изменениях
  useEffect(() => {
    console.log('UseEffect 2 - ');
  });

  // Пример 3 - с указанием зависимости или нескольких
  // при первой отрисовке (on first render),
  // при именно этой зависисмости - в данном примере - numberOfTeeth
  useEffect(() => {
    console.log('UseEffect 3 - ');
  }, [numberOfTeeth]);

  // при первом рендере и при изменении значения weight
  useEffect(() => {
    console.log('UseEffect 4 - ');
  }, [weight]);

  // при первом рендере и при изменении значения weight или numberOfTeeth
  useEffect(() => {
    console.log('UseEffect 5 - ');
  }, [weight, numberOfTeeth]);

  async function loadDogImage(): Promise<void> {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const obj = await res.json();
    const { message } = obj;
    setUrl(message);
  }

  useEffect(() => {
    loadDogImage();
  }, []);

  return (
    <div>
      <h1>Повторим useEffect</h1>
      <p>Число зубов: {numberOfTeeth}</p>
      <p>Вес: {weight}</p>
      <button type="button" onClick={handleToothGrowth}>Вырастить зуб</button>
      <button type="button" onClick={handleTakeWeight}>Набрать вес</button>
      <div>
        <img src={url} alt="dog" />
      </div>
    </div>
  );
}