
export enum MilkType {
  COW = 'गाय (Cow)',
  BUFFALO = 'म्हेस (Buffalo)'
}

export enum DeliveryTime {
  MORNING = 'सकाळ (Morning)',
  EVENING = 'संध्याकाळ (Evening)'
}

export interface OrderFormData {
  customerName: string;
  mobileNumber: string;
  address: string;
  milkType: MilkType;
  quantity: string;
  deliveryTime: DeliveryTime;
  isMonthlySubscription: boolean;
}

export interface StoredOrder extends OrderFormData {
  id: string;
  timestamp: string;
  status: 'pending' | 'delivered' | 'cancelled';
}
