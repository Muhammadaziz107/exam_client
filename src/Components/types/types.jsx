import { useEffect, useState } from "react";

function Types() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:7000/types")
      .then(res => res.json())
      .then(data => setData(data));
  });
  return (
    <div>
      <table>
        <tr>
          <th>Type name</th>
        </tr>
        {data &&
          data.map(row => (
            <tr>
              <td>{row.types_name}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
export default Types;
