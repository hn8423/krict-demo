import { SUPPORT_CONTACTS } from "@/data/navItems";

export default function SupportCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <div className="flex items-start justify-between border-b border-gray-100 pb-5">
        <div>
          <h3 className="text-2xl font-extrabold text-gray-300">FAQ</h3>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            온라인계약(주문)시스템 관련 자주 묻는 질문과 답변을 살펴 볼 수
            있습니다.
          </p>
        </div>
        <span aria-hidden className="text-4xl">
          💬
        </span>
      </div>

      <h4 className="mt-5 text-lg font-bold text-[#222]">고객지원</h4>
      <dl className="mt-3 grid max-h-[200px] grid-cols-2 gap-x-6 gap-y-3 overflow-y-auto">
        {SUPPORT_CONTACTS.map((contact) => (
          <div
            key={contact.label}
            className="rounded-md border border-gray-100 bg-gray-50 px-3 py-2 text-center"
          >
            <dt className="text-sm font-semibold text-[#222]">
              {contact.label}
            </dt>
            <dd className="mt-1 text-sm text-gray-600">{contact.phone}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
