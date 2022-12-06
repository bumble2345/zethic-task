import React, { useState, useRef } from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

function Virtualizedlist(data) {
  const usersList = data.data;
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );
  const [show, setShow] = useState(false);
  const [person, setPerson] = useState([]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "100%", height: "400px" }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowCount={usersList.length}
              rowRenderer={({ key, index, style, parent }) => {
                const user = usersList[index];

                return (
                  <CellMeasurer
                    key={key}
                    cache={cache.current}
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}
                  >
                    <div style={style}>
                      <button
                        onClick={() => {
                          setShow(true);
                          setPerson(user);
                        }}
                      >
                        {user.username}
                      </button>
                      <span>{user.userAge}</span>
                    </div>
                  </CellMeasurer>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>
      <div>
        {show && person ? (
          <div style={{ width: "400px" }}>
            <h2>User</h2>
            <ul>
              <li>userId:{person.userId}</li>
              <li>username:{person.username}</li>
              <li>userAge:{person.userAge}</li>
              <li>number:{person.number}</li>
              <li>email:{person.email}</li>
              <li>userLocation:{person.userLocation}</li>
              <li>carModel:{person.carModel}</li>
              <li>carManufacturer:{person.carManufacturer}</li>
              <li>carAge:{person.carAge}</li>
            </ul>
            <button onClick={() => setShow(false)}>close</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Virtualizedlist;
