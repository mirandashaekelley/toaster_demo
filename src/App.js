import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  return (
    <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center', flexDirection: 'column', marginTop: 200}}>
      <h1>Toastify Demo</h1>
      <Default/>
      <Success/>
      <Error/>
      <Warning/>
      <Info/>
      <Custom/>
      <ToastContainer/>
    </div>
  );
}

function Default() {
  const notify = () => toast("Hi, Welcome to the Toast Tutorial!🌒");

  return <div style={{height:40, width: 100, margin: 20, color:'white', background:'#343a40',display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 15, cursor: 'pointer'}} onClick={notify}>Default</div>;
}
function Success(){
  const success = () => toast.success("Success ✅",
  {position: toast.POSITION.TOP_CENTER}
  );
 
  return <div style={{height:40, width: 100, margin: 20, color:'white', background:'#28a745',display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 15, cursor: 'pointer'}} onClick={success}>Success</div>;
}
function Error(){
  const error = () => toast.error("🚫Error!",
  {
  position: toast.POSITION.TOP_LEFT,
  draggable: false,
  closeButton: false,
  pauseOnHover: true,
  pauseOnFocusLoss: false
  }
  );
 
  return <div style={{height:40, width: 100, margin: 20, color:'white', background:'#dc3545',display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 15, cursor: 'pointer'}} onClick={error}>Error</div>;
}
function Warning(){
  const warning = () => toast.warn("⚠️Warning!⚠️",
  {position: toast.POSITION.BOTTOM_LEFT}
  );

  return <div style={{height:40, width: 100, margin: 20, color:'white', background:'#ffc107',display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 15, cursor: 'pointer'}} onClick={warning}>Warning</div>;

}
function Info(){
  const info = () => toast.info("ℹ️ Information",
  {position: toast.POSITION.BOTTOM_CENTER}
  );
  return <div style={{height:40, width: 100, margin: 20, color:'white', background:'#17a2b8',display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 15, cursor: 'pointer'}} onClick={info}>Information</div>;
}
function Custom(){
  const custom = () => toast("🌸Custom Notifications🌸",
  {
  draggable: true,
  position: toast.POSITION.BOTTOM_RIGHT,
  className: "background-toast",
  bodyClassName: "body-toast",
  progressClassName: "progress-toast"
  });
  return <div style={{height:40, width: 100, margin: 20, color:'white', background:'pink',display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 15, cursor: 'pointer'}} onClick={custom}>Custom</div>;

}

export default App;
