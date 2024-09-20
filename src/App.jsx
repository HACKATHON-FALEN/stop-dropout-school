import React, { Suspense, lazy, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Homepage/views/Homepage";
import Profile from "./components/Profile/views/Profile";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import FileExplorerChonky from "./components/FileExplorer/FileExplorerChonky";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/views/Login";
import Post1 from "./components/Posts/Post1/post1";


const Fallback = (
  <div className="loader-container">
    <small>Va rugam asteptati</small>
  </div>
);

const Feed = lazy(() => import("./components/Feed/views/Feed"));


const App = () => {
  return (
    <Fragment>
      <Suspense fallback={Fallback}>
        <Routes>
          {/* Aici bagi paginile faci o componenta noua Layout care contine navbar si footer -> las exemplu */}

          <Route path="*" element={<Homepage />} />
          <Route path="Post1" element={<Layout><Post1 /></Layout>} />
          <Route path="Profile" element={<Profile />} />
          <Route path="FileExplorer" element={<Layout><FileExplorer></FileExplorer></Layout>} />
          <Route path="FileExplorer2" element={<Layout><FileExplorerChonky></FileExplorerChonky></Layout>} />
          <Route path="Chat" element={<Chat></Chat>} />
          <Route path="Login" element={<Login></Login>} />
          <Route path="/feed" element={<Feed />} />

        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
