import type { GoodsItem } from "@/data/bidDetail";
import { formatWon } from "@/data/bidDetail";

type GoodsDetailTableProps = {
  readonly items: ReadonlyArray<GoodsItem>;
};

export default function GoodsDetailTable({ items }: GoodsDetailTableProps) {
  const total = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-y-2 border-gray-300 text-[#333]">
            <th className="w-16 px-3 py-3 font-bold">순번</th>
            <th className="px-3 py-3 text-left font-bold">품목명</th>
            <th className="w-40 px-3 py-3 font-bold">금액(원)</th>
            <th className="w-32 px-3 py-3 font-bold">계정번호</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.no} className="border-b border-gray-100 text-center">
              <td className="px-3 py-3 text-gray-500">{item.no}</td>
              <td className="px-3 py-3 text-left text-gray-700">{item.name}</td>
              <td className="px-3 py-3 text-right text-gray-700">
                {item.amount.toLocaleString("ko-KR")}
              </td>
              <td className="px-3 py-3 text-gray-700">{item.account}</td>
            </tr>
          ))}
          <tr className="border-b-2 border-gray-300 bg-gray-50 font-semibold">
            <td colSpan={2} className="px-3 py-3 text-center text-[#222]">
              부가세 포함금액 합계
            </td>
            <td className="px-3 py-3 text-right text-[#1f4e9b]">
              {formatWon(total)}
            </td>
            <td className="px-3 py-3" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
