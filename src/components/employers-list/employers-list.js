import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";
const EmployersList = ({ data }) => {
  const elemnts = data.map((item) => {
    return <EmployersListItem {...item} />;
  });

  return <ul className="app-list list-group">{elemnts}</ul>;
};
export default EmployersList;
