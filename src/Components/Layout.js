import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Navbar/Header";
import Footer from "./Footer/Footer";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import { ToastContainer, toast } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <ToastContainer />
      <Toaster position='top-center' />
      <WhatsAppWidget
        phoneNo="918490059352"
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="300px"
        autoOpen={true}
        autoOpenTimer={5000}
        messageBox={true}
        messageBoxTxt=""
        iconSize="50"
        iconColor="white"
        iconBgColor="#206c43"
        headerIcon="./images/rntalhub.jpg"
        headerIconColor="pink"
        headerTxtColor="white"
        headerBgColor="#206c43"
        headerTitle="Online Gadget Store"
        headerCaption="Welcome To Online Gadget Store"
        bodyBgColor=""
        chatPersonName="Support"
        chatMessage={
          <>
            Hi there 👋
            <br />
            How can I help you?
          </>
        }
        footerBgColor="#999"
        btnBgColor="#206c43"
        btnTxtColor="white"
        btnTxt="Start Chat"
      />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
