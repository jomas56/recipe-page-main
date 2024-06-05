import React from "react";
import styles from "./RowTableComponent.module.scss";

const renderTableItem = (label, value, index) => {
  return (
    <tr key={index}>
      <td>{label}</td>
      <td className={styles.tableData}>{value}</td>
    </tr>
  );
};

const RowTableComponent = ({ data }) => {
  return (
    <div className={styles.tableContainer}>
      <table>
        {data
          ? data.map((item, index) => {
              return renderTableItem(item.label, item.value, index);
            })
          : null}
      </table>
    </div>
  );
};

export default RowTableComponent;
