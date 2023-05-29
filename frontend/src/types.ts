export interface EmployeeListProps {
  endPoint: string;
  className: string;
}

export interface EmployeeData {
  id: number;
  name: string;
  age: number;
  senior: boolean;
  favoriteColor: string;
  department: number;
}

export interface SwitchProps {
  id: number;
  rank: boolean;
  mode: boolean;  
  setRank: React.Dispatch<React.SetStateAction<boolean>>;
}