import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./routes/contato";

import Posts from "./routes/posts"
import Home from "./routes/home";
import Post from "./routes/post"


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        <Route index element={<Home />} />
        <Route path="contato" element={<Contato />} />
        <Route path="posts" element={<Posts />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Selecione um Post</p>
              </main>
            }
          />
          <Route path=":postId" element={<Post />} />
        </Route>
       
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
