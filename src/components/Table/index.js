import React from "react";
import "./style.css";

const Table = ({ data, fields }) => {
  return (
    <table>
      <thead>
        <tr>
          {fields.map((field, index) => {
            return (
              <th key={index} className={field.mobileHide ? "mobile-hide" : ""}>
                {field.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <img
                  className="avatar-image"
                  src={item.avatar}
                  alt={`image_${item.id}`}
                />
              </td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td className="mobile-hide">{item.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { Table };
