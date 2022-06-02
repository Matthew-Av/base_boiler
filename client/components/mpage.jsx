import React from 'react'
import Head from './head'

const ThePage = () => {
  const [srange, setRange] = React.useState(75)
  const rangeInput = (
    <div className="form__field--66 form__field--slider-container">
      <label htmlFor="range" className="slider-label">
        <span>Sed ut perspiciatis, unde omnis iste natus</span>
        <span id="range-val">{srange}%</span>
      </label>
      <input
        className="form__slider"
        onChange={(e) => setRange(e.target.value)}
        type="range"
        id="range"
        name="range"
        defaultValue={0}
        min={0}
        max={100}
        value={srange}
      />
    </div>
  )
  return (
    <>
      <Head title="Main page" />
      <div className="main" id="main">
        <header className="header">
          <div className="top-menu">
            <div className="top-menu__inner">
              <div className="logo">
                LoremIpsum.<span className="blue-text">Net</span>
              </div>
              <nav className="menu">
                <div className="menu__item">
                  <a href="/" className="link">
                    Бизнес
                  </a>
                </div>
                <div className="menu__item">
                  <a href="/" className="link">
                    О нас
                  </a>
                </div>
                <div className="menu__item">
                  <a href="/" className="link">
                    Цены
                  </a>
                </div>
                <div className="menu__item">
                  <a href="/" className="link">
                    Оформить заказ
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <section className="slider">
            <div className="slider-inner">
              <div className="slider-inner__about">
                <h1 className="h1">
                  <span className="blue-text">Lorem ipsum</span> dolor sit amet consectetur
                  <span className="blue-text"> adipiscing</span>
                </h1>
                <div>
                  <div className="ul-head">
                    At vero eos et accusamus et iusto odio dignissimos ducimus!
                  </div>
                  <ul className="ul">
                    <li>Totam rem aperiam eaque ipsa</li>
                    <li>Sit voluptatem accusantium doloremque laudantium</li>
                    <li>Sed ut perspiciatis, unde omnis iste natus error</li>
                  </ul>
                </div>
              </div>
              <div className="slider-inner__buttons">
                <div className="slider-buttons__item button--primary button">заказать</div>
                <div className="slider-buttons__item button--secondary button">подробнее</div>
              </div>
            </div>
          </section>
        </header>
        <section className="order">
          <div className="order-head">
            <h2 className="h2">
              Оформление <span className="blue-text">Заказа</span>
            </h2>
            <p className="text-p">Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
          </div>
          <div className="order-stages">
            <div className="order-stages__item order-stages__item--search">
              <div className="order-icon">
                <img src="images/icons/search.png" alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="order-stages__item order-stages__item--percent">
              <div className="order-icon">
                <img src="images/icons/percent.png" alt="" />
              </div>
              <p>Сonsecteturadipiscing elit</p>
            </div>
            <div className="order-stages__item order-stages__item--list">
              <div className="order-icon">
                <img src="images/icons/list.png" alt="" />
              </div>
              <p>Sed do eiusmod tempor</p>
            </div>
            <div className="order-stages__item order-stages__item--email">
              <div className="order-icon">
                <img src="images/icons/mail.png" alt="" />
              </div>
              <p>Esse cillum dolore eu fugiat</p>
            </div>
            <div className="order-stages__item order-stages__item--price">
              <div className="order-icon">
                <img src="images/icons/money.png" alt="" />
              </div>
              <p>Excepteur sint occaecat cupidatat non proident</p>
            </div>
          </div>
          <div className="form-wrapper">
            <form action="#" target="__self" className="form">
              <select
                className="form__field form__field--33 form__field--select"
                defaultValue="op0"
              >
                <option className="sel-opt" disabled value="op0">
                  Выберите тип системы
                </option>
                <option className="sel-opt" value="op1">
                  Sed ut perspiciatis
                </option>
                <option className="sel-opt" value="op2">
                  Nemo enim ipsam
                </option>
                <option className="sel-opt" value="op3">
                  Et harum quidem
                </option>
                <option className="sel-opt" value="op4">
                  Temporibus autem
                </option>
                <option className="sel-opt" value="op5">
                  Itaque earum rerum
                </option>
                <option className="sel-opt" value="op6">
                  Tempori bus quidem
                </option>
              </select>
              <input
                type="email"
                name="user-email"
                className="form__field form__field--mail form__field--33"
                placeholder="Ваш e-mail"
              />
              <input
                type="text"
                name="user-name"
                className="form__field form__field--33"
                placeholder="Ваше имя"
              />
              {rangeInput}
              <div className="form__field--33 form__field--uploader upload-container button button--secondary">
                <label htmlFor="user-file" className="upload-container__label">
                  <i className="icon icon--add-file" />
                  Прикрепить файл
                </label>
                <input
                  type="file"
                  id="user-file"
                  name="user-file"
                  className="upload-container__input"
                  placeholder="Ваше имя"
                />
              </div>
              <input
                type="submit"
                className="form__button button button--primary"
                value="Отправить"
              />
            </form>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-inner">
            <div className="copyright footer-inner__item footer-inner__item--first">
              © 2018 «LOREMIPSUM.NET» Все права защищены.
            </div>
            <div className="payment-methods footer-inner__item">
              <div className="payment-methods__elem payment-methods__elem--qiwi">
                <i className="icon icon--qiwi" />
                <span className="link-text">QIWI wallet</span>
              </div>
              <div className="payment-methods__elem payment-methods__elem--yam">
                <i className="icon icon--ym" />
                <span className="link-text">Yandex Money</span>
              </div>
              <div className="payment-methods__elem payment-methods__elem--webmoney">
                <i className="icon icon--webmn" />
                <span className="link-text">Web Money</span>
              </div>
            </div>
            <div className="contacts footer-inner__item footer-inner__item--last">
              <div className="contacts__item contacts__item--mail">
                <a href="mailto:info@ipsum228.com" className="link">
                  <i className="icon icon--email" />
                  <span className="link-text">info@ipsum228.com</span>
                </a>
              </div>
              <div className="contacts__item contacts__item--vk">
                <a href="https://vk.com" className="link">
                  <i className="icon icon--vk" />
                  <span className="link-text">Мы вконтакте</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default React.memo(ThePage)
