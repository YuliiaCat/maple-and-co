import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import IFormValues from '~/types/form';
import uuid from "react-native-uuid";

export interface BusinessStore {
  businesses: IFormValues[];
  addBusiness: (business: Omit<IFormValues, "id">) => void;
}

export const useBusinessStore = create<BusinessStore>()(
  persist(
    (set) => ({
      businesses: [],

      addBusiness: (business) =>
        set((state) => ({
          businesses: [
            ...state.businesses,
            {
              id: uuid.v4().toString(),
              ...business,
            },
          ],
        })),
    }),
    {
      name: "business-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
