export interface TradingHour {
    trading_hour_id?: number; // Auto-incremented
    car_wash_id: number; // Foreign key referencing car_wash_information
    day: 'weekday' | 'Saturday' | 'Sunday';
    start_time: string; // Format: HH:mm:ss
    end_time: string;   // Format: HH:mm:ss
  }
  