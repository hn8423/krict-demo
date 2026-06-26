import type { BidStatus } from "@/data/bidParticipation";

type BidStatusStepperProps = {
  readonly status: BidStatus;
};

const STEPS = ["입찰중", "개찰대기", "낙찰자선정", "계약완료"] as const;

const STATUS_TO_STEP: Readonly<Record<BidStatus, number>> = {
  참여중: 0,
  개찰대기: 1,
  낙찰: 2,
  유찰: 1,
  마감: 3,
};

export default function BidStatusStepper({ status }: BidStatusStepperProps) {
  const activeIndex = STATUS_TO_STEP[status];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {STEPS.map((step, index) => {
        const isActive = index <= activeIndex;
        return (
          <div key={step} className="flex items-center gap-2">
            <span
              className={`rounded px-4 py-2 text-sm font-bold ${
                isActive
                  ? "bg-[#1f4e9b] text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {step}
            </span>
            {index < STEPS.length - 1 && (
              <span aria-hidden className="text-gray-300">
                ›
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
