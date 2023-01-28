import "./styles.scss";
import "./style.css";

(function renderMainTitle(): void {
  let html = `<div class="title">Async-race</div>`;
  const car: HTMLElement = document.createElement('h1');
  car.innerHTML = html;
  document.body.append(car);
})()

function renderCar(className: string): void {
  let html = `<div class="${className}"></div>`;
  const car: HTMLElement = document.createElement('div');
  car.innerHTML = html;
  document.body.append(car);
}
document.body.addEventListener('click', () => {
  renderCar('car');
  console.log('clicked');
})
renderCar('car');