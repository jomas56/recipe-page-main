import React from "react";
import Proptypes from "prop-types";
import styles from "./RowTableComponent.module.scss";

const renderTableItem = (label, value, index) => {
  return (
    <tr key={index}>
      <td>{label}</td>
      <td className={styles.tableData}>{value}</td>
    </tr>
  );
};

const RowTableComponent = ({ ...props }) => {
  const { data } = props;
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

RowTableComponent.propTypes = {
  data: Proptypes.array,
};
export default RowTableComponent;
