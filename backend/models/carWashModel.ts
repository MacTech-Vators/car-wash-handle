export interface CarWash {
    car_wash_id?: number; // Primary key
    nacwo_membership_number: string;
    car_wash_name: string;
    registered_business_name: string;
    registration_no: string;
    sars_pin: string;
    business_bank_account: string;
    business_type: 'fixed' | 'mobile' | 'hybrid' | 'other';
    business_premises: 'Owned' | 'Renting' | 'Other';
    business_level: 'Start-up' | 'Struggling' | 'Established' | 'Growing';
    owner_id: number; // Foreign key referencing owner_information
  }
  