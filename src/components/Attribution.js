import React from "react";

// TODO: Мое имя и ссылку на гит можно вынести как пропс

const Attribution = () => {
  return (
    <div className="attribution text-xs text-center">
      Challenge by
      <a
        className="text-attribution"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a className="text-attribution" href="https://github.com/ALapina">
        Anna Lapina
      </a>
      .
    </div>
  );
};

export default Attribution;
