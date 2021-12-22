import { useEffect, useState } from "react";

function Clinics() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:7000/clinic")
      .then(res => res.json())
      .then(data => setData(data));
  });
  return (
    <div>
      <table>
        <tr>
          <th>clinic name</th>
        </tr>
        {data &&
          data.map(row => (
            <tr>
              <td>{row.clinic_name}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
export default Clinics;
