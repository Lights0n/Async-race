import "./styles.scss";
import { colorType } from './types';
(function renderMainTitle(): void {
  let html = `<div class="title">Async-race</div>`;
  const title: HTMLElement = document.createElement('h1');
  title.innerHTML = html;
  document.body.append(title);
})()

function renderCar(carModel: string, color: colorType): void {
  let html = `
  <div class="garage__car-model">${carModel}</div>
  <svg width="160px" height="160px" viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#000000" stroke-width="0.128">
  <g id="SVGRepo_bgCarrier" stroke-width="0" />
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <g id="flat">
          <path d="M9,51H3V45.064A4,4,0,0,1,5.959,41.2L14.127,39H57a4,4,0,0,1,4,4v8H55" style="fill:${color}" />
          <path d="M3.157,46A2.09,2.09,0,0,0,3,46.76V51H61V46Z" style="fill:${color}" />
          <path d="M54,39H14.127l8.8-10.561A4,4,0,0,1,26,27H43.859a4,4,0,0,1,3.328,1.781Z" style="fill:#87ced9" />
          <rect height="12" style="fill:#5eb3d1" width="2" x="34" y="27" />
          <circle cx="14" cy="51" r="5" style="fill:#575755" />
          <circle cx="50" cy="51" r="5" style="fill:#575755" />
          <circle cx="14" cy="51" r="2" style="fill:#ebebe8" />
          <circle cx="50" cy="51" r="2" style="fill:#ebebe8" />
          <polygon points="52 8 40 13 40 9 28 14 28 10 16 15.053 16 12 3 18 16 24 16 20.947 28 26 28 22 40 27 40 23 52 28 52 8" style="fill:#7ea82d" />
          <rect height="4" style="fill:#a65b2d" width="9" x="52" y="16" />
          <path d="M27,28a.972.972,0,0,1-.185-.017,1,1,0,0,1-.8-1.167l3-16a1,1,0,1,1,1.966.368l-3,16A1,1,0,0,1,27,28Z" style="fill:#7a4321" />
          <path d="M45,28a1,1,0,0,1-.982-.816l-3-16a1,1,0,0,1,1.966-.368l3,16a1,1,0,0,1-.8,1.167A.972.972,0,0,1,45,28Z" style="fill:#7a4321" />
          <rect height="2" style="fill:#ebebe8" width="4" x="28" y="42" />
          <rect height="2" style="fill:#ebebe8" width="4" x="44" y="42" />
          <rect height="2" style="fill:#a7e1eb" transform="translate(-13.973 31.366) rotate(-50.191)" width="1.562" x="25.719" y="29.6" />
          <rect height="2" style="fill:#a7e1eb" transform="translate(-17.817 30.356) rotate(-50.191)" width="4.686" x="21.157" y="33.2" />
          <rect height="12" style="fill:${color}" width="2" x="34" y="39" />
      </g>
    </g>
  </svg>`;
  const car: HTMLElement = document.createElement('div');
  car.classList.add('garage__car-outer')
  car.innerHTML = html;
  document.body.append(car);
}


function implementCar(carColor?: colorType, carName?: string) {
  const model: HTMLInputElement = document.querySelector('#car-model');
  const color: HTMLInputElement = document.querySelector('#car-color');
  if (!model.value) {
    model.reportValidity();
    return;
  }
  renderCar(`${model.value}`, `#${color.value.slice(1)}`);
  model.value = '';
  return;
}

document.querySelector('.garage__implement-button').addEventListener('click', () => {
  implementCar();
})

// todo закинуть классы и сделать стили. закинуть в модуль гаража его функции и создать отдельные для виннеров
// todo добавлять в лист, а не в див