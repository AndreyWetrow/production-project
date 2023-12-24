import React, { Suspense, useContext, useEffect, useState } from "react";
import Counter from "../components/Counter";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeProvider, useTheme } from "app/provider/ThemeProvider";
import { AppRouter } from "app/provider/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const { theme } = useTheme();
  // useEffect(() => {
  //   throw new Error();
  // }, []);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
