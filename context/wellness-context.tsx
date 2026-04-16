import { DAILY_BASELINE, DAILY_METRICS } from "@/constants/data";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface WellnessContextValue {
  yogaMinutes: number;
  metrics: WellnessMetric[];
  addYogaMinutes: (minutes: number) => void;
  adjustMetric: (metricId: string, amount: number) => void;
}

const WellnessContext = createContext<WellnessContextValue | undefined>(
  undefined,
);

export const WellnessProvider = ({ children }: PropsWithChildren) => {
  const [yogaMinutes, setYogaMinutes] = useState(DAILY_BASELINE.yogaMinutes);
  const [metrics, setMetrics] = useState<WellnessMetric[]>(DAILY_METRICS);

  const addYogaMinutes = useCallback((minutes: number) => {
    setYogaMinutes((current) => Math.max(current + minutes, 0));
  }, []);

  const adjustMetric = useCallback((metricId: string, amount: number) => {
    setMetrics((current) =>
      current.map((metric) =>
        metric.id === metricId
          ? { ...metric, value: Math.max(metric.value + amount, 0) }
          : metric,
      ),
    );
  }, []);

  const value = useMemo(
    () => ({ yogaMinutes, metrics, addYogaMinutes, adjustMetric }),
    [yogaMinutes, metrics, addYogaMinutes, adjustMetric],
  );

  return (
    <WellnessContext.Provider value={value}>
      {children}
    </WellnessContext.Provider>
  );
};

export const useWellness = () => {
  const context = useContext(WellnessContext);

  if (!context) {
    throw new Error("useWellness must be used within WellnessProvider");
  }

  return context;
};
