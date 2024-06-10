import React from "react";
import Proptypes from "prop-types";
import styles from "./ListComponent.module.scss";

const renderListItem = (item, index, hasSpan) => {
  const splittedValue = item.split(":");
  return splittedValue.length > 1 && hasSpan ? (
    <li key={index}>
      <span>{splittedValue[0]}:</span>
      {splittedValue[1]}
    </li>
  ) : (
    <li>{item}</li>
  );
};

const ListComponent = ({ ...props }) => {
  const { data, isOrderedList, hasSpan } = props;

  return (
    <div className={styles.listContainer}>
      {isOrderedList ? (
        <ol>
          {data
            ? data.map((value, index) => {
                return renderListItem(value, index, hasSpan);
              })
            : null}
        </ol>
      ) : (
        <ul>
          {data
            ? data.map((value, index) => {
                return renderListItem(value, index, data[0].hasSpan);
              })
            : null}
        </ul>
      )}
    </div>
  );
};

ListComponent.propTypes = {
  data: Proptypes.array,
  isOrderedList: Proptypes.bool,
  hasSpan: Proptypes.bool,
};

export default ListComponent;
