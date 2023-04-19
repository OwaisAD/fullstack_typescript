import React from "react";

type HeaderProps = {
  columns: string[];
};

const Header = ({ columns }: HeaderProps) => {
  return (
    <thead>
      <tr>
        {columns.map((column, idx) => (
          <th key={idx}>{column}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
