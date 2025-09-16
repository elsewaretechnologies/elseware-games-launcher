// Hooks / Node modules / Styles
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";

// Reducers / Actions

// Utils / Functions

// Components

// Sub-Components

// Data / Images / Icons
import { routes } from "../data/routes";

const Level1Title = ({ title, children, styles }) => {
  return (
    <div className="inline-flex items-center justify-between w-full bg-gray-800/50 py-3 px-5">
      <div
        className={classNames({
          "text-2xl font-semibold text-gray-300 rounded-md": true,
          [`${styles}`]: styles,
        })}
      >
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

const Level2Title = ({ title, children, styles }) => {
  return (
    <div className="inline-flex items-center justify-between w-full py-3">
      <div
        className={classNames({
          "text-4xl text-gray-400 border-l-[5px] border-l-gray-500 px-3": true,
          [`${styles}`]: styles,
        })}
      >
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

const Level3Title = ({ title, children, styles }) => {
  return (
    <div className="inline-flex items-center justify-between w-full py-1">
      <div
        className={classNames({
          "text-xl font-poppins text-gray-500 border-l-4 border-l-gray-500 px-3 mb-2": true,
          [`${styles}`]: styles,
        })}
      >
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

function TitleBar({ level = 1, overrideTitle, children, styles }) {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    );

    setTitle(currentRoute ? currentRoute.name : "");
  }, [location.pathname]);

  switch (level) {
    case 1:
      return (
        <Level1Title
          title={overrideTitle ? overrideTitle : title}
          styles={styles}
        >
          {children}
        </Level1Title>
      );

    case 2:
      return (
        <Level2Title
          title={overrideTitle ? overrideTitle : title}
          styles={styles}
        >
          {children}
        </Level2Title>
      );

    case 3:
      return (
        <Level3Title
          title={overrideTitle ? overrideTitle : title}
          styles={styles}
        >
          {children}
        </Level3Title>
      );

    default:
      break;
  }
}

export default TitleBar;
