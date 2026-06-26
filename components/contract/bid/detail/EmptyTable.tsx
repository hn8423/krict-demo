type EmptyTableProps = {
  readonly headers: ReadonlyArray<string>;
  readonly message?: string;
};

export default function EmptyTable({
  headers,
  message = "조회된 데이터가 없습니다.",
}: EmptyTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-y-2 border-gray-300 text-[#333]">
            {headers.map((header) => (
              <th key={header} className="px-3 py-3 font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={headers.length}
              className="border-b border-gray-100 px-3 py-10 text-center text-gray-400"
            >
              {message}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
