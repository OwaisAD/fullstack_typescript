import React from "react";

type Person = {
  id: number;
  name: string;
  age: number;
};

type RowProps = {
  row: (string | number)[];
};

const Row = ({ row }: RowProps) => {
  return (
    <tbody>
      <tr>
        {row.map((rowData, idx) => (
          <td key={idx}>{rowData}</td>
        ))}
      </tr>
    </tbody>
  );
};

export default Row;
