export default function ContractFooter() {
  return (
    <footer className="mt-auto">
      <div className="bg-[#4b525c] text-white">
        <button
          type="button"
          className="mx-auto flex w-full max-w-[1200px] items-center justify-center gap-2 px-4 py-4 text-[15px] font-medium"
        >
          <span aria-hidden>≡</span> 관련 사이트 바로가기
        </button>
      </div>

      <div className="bg-[#eceef0]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-1 text-2xl font-extrabold tracking-tight text-[#9aa3ad]">
            KR
            <span className="relative">
              I
              <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#9aa3ad]" />
            </span>
            CT
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <ul className="flex gap-4">
              <li>
                <a href="#" className="font-semibold hover:text-[#1f4e9b]">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1f4e9b]">
                  이메일무단수집거부
                </a>
              </li>
            </ul>
            <p className="text-xs text-gray-500">
              대전광역시 유성구 가정로 141 TEL 042-860-7114 FAX 042-861-7022 —
              데모 페이지
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
