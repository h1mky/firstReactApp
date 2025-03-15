import "./app-info.css";

const AppInfo = ({ increasedEmployees, totalEmployyes }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>общее число сотрудников: {totalEmployyes}</h2>
      <h2>премию получат:{increasedEmployees}</h2>
    </div>
  );
};
export default AppInfo;
