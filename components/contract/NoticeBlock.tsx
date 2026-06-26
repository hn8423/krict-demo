import { SUPPORT_CONTACTS } from "@/data/navItems";

const NOTICES = [
  "한국화학연구원은 사전 예약제로 계약을 할 수 있으며, 인터넷 예약이 가능합니다.",
  "미등록 업체일 경우에는 회원가입을 하여 주시기 바랍니다.",
  "예약시간은 다수 선택(계속,분리)이 가능하므로 계약시간을 감안하여 신청 해 주시기 바랍니다.",
  "계약시간 지연으로 인해 예약시간 보다 다소 늦어질 수도 있습니다.",
] as const;

export default function NoticeBlock() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div>
        <span className="inline-block rounded-full bg-[#f08c00] px-5 py-1.5 text-sm font-bold text-white">
          주의사항
        </span>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-[#d9480f]">
          {NOTICES.map((notice) => (
            <li key={notice}>{notice}</li>
          ))}
        </ul>
      </div>

      <div>
        <span className="inline-block rounded-full bg-[#1f4e9b] px-5 py-1.5 text-sm font-bold text-white">
          고객지원
        </span>
        <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {SUPPORT_CONTACTS.map((contact) => (
            <div key={contact.label} className="flex justify-between gap-3">
              <dt className="font-semibold text-[#1f4e9b]">{contact.label}</dt>
              <dd className="text-gray-700">{contact.phone}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
