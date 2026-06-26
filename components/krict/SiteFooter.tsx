import KrictLogo from "./KrictLogo";

const FOOTER_LINKS = [
  "개인정보처리방침",
  "이메일무단수집거부",
  "저작권정책",
  "찾아오시는 길",
] as const;

export default function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#2b2f36] text-gray-300">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-4 brightness-0 invert">
              <KrictLogo variant="white" />
            </div>
            <p className="text-sm leading-6 text-gray-400">
              (34114) 대전광역시 유성구 가정로 141 (장동)
              <br />
              대표전화 042-860-7114 / FAX 042-861-4245
            </p>
            <p className="mt-4 text-xs text-gray-500">
              © KRICT (Korea Research Institute of Chemical Technology). All
              rights reserved. — 데모 페이지
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {FOOTER_LINKS.map((link, index) => (
              <li key={link}>
                <a
                  href="#"
                  className={`hover:text-white ${
                    index === 0 ? "font-semibold text-white" : ""
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
