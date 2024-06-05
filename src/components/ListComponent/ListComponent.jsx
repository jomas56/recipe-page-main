import React from "react";
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

const ListComponent = ({ data, isOrderedList, hasSpan }) => {
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
                return renderListItem(value, index, hasSpan);
              })
            : null}
        </ul>
      )}
    </div>
  );
};

export default ListComponent;
