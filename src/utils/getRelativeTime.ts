type UnitDates = {
  day: number;
  hour: number;
  minute: number;
  second: number;
};

const UNIT_DATES: UnitDates = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

export const getRelativeTime = (epochTime: string) => {
  const started = new Date(epochTime).getTime();
  const now = new Date().getTime();
  const elapsed = (started - now) / 1000;

  for (const [unit, value] of Object.entries(UNIT_DATES)) {
    const absoluteElapsed = Math.abs(elapsed);
    if (absoluteElapsed > value || unit === "second") {
      return rtf.format(
        Math.round(elapsed / value),
        unit as Intl.RelativeTimeFormatUnit
      );
    }
  }

  return "";
};
