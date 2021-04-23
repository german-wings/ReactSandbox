import React from "react";
import { BirthdayComponent } from "../BirthdayTagComponent/BirthdayComponent";
import { data as feed } from "../data/data";
import "./ListComponent.css";
import { useState } from "react";

const ListComponent = () => {
  let [data, setData] = useState(feed);

  return (
    <React.Fragment>
      <div>
        {data.map((item, index) => {
          return (
            <div className="card">
              <BirthdayComponent
                key={index}
                name={item.name}
                image_source={item.image}
                birthday_date={item.birthday_date}
              ></BirthdayComponent>
            </div>
          );
        })}
      </div>
      <h1 className="no_of_birthday">{data.length}</h1>
      <button
        onClick={() => {
          setData([]);
        }}
      >
        Clear All
      </button>
    </React.Fragment>
  );
};

export default ListComponent;
