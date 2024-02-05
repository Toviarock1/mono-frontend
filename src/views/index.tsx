import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./../hoc/Layout";
import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";
import Dashboard from "./Dashboard";
import LinkedAccountListView from "./linkedAccount/LinkedAccountListView";
import LinkedAccountDetailView from "./linkedAccount/LinkedAccountDetailView";

const Index = () => {
  const [showModal, setshowModal] = useState(false);

  return (
    <Routes>
      <Route path="/signin" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route
        path="/"
        element={
          <Layout showModal={showModal}>
            <Dashboard showModal={showModal} />
          </Layout>
        }
      />
      <Route
        path="/linked-account"
        element={
          <Layout>
            <LinkedAccountDetailView />
          </Layout>
        }
      />
      <Route
        path="/linked-account/:id"
        element={
          <Layout>
            <LinkedAccountListView />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Index;
