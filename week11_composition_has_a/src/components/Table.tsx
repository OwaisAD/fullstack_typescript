const Table = ({ headers, rows }: any) => {
  return (
    <table className="table">
      <>{headers}</>
      <>{rows}</>
    </table>
  );
};

export default Table;
