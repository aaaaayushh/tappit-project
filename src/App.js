import "./App.css";
import pic from "./aayush.jpg";
import Row from "./Row";
import Header from "./Header";
const info = {
  fpo: "Lorem ipsum",
  contact: "Karan Sharma",
  img: pic,
  location: "madurai",
  members: "12",
  bod: "12",
  staffs: "12",
};
const head = {
  fpo: "FPO Name",
  contact: "Contact Person Name",
  img: "",
  location: "Location",
  members: "Members",
  bod: "BOD",
  staffs: "Staffs",
  action: "Action",
};
function App() {
  return (
    <div className="App">
      <Header />
      <div className="head">
        <div className="fpo">{head.fpo}</div>
        <div className="contact">
          <img src={head.img} alt="" className="contact__image" />
          <p className="contact__name">{head.contact}</p>
        </div>
        <div className="location">{head.location}</div>
        <div className="members">{head.members}</div>
        <div className="bod">{head.bod}</div>
        <div className="staffs">{head.staffs}</div>
        <div className="action">Action</div>
      </div>
      <Row info={info} />
      <Row info={info} />
      <Row info={info} />
      <Row info={info} />
      <Row info={info} />
      <Row info={info} />
      <Row info={info} />
    </div>
  );
}

export default App;
