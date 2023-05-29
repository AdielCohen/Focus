import axios from 'axios';
import { ChangeEvent } from 'react';

export default class actionsRepository {
  static async updateColor(e: ChangeEvent<HTMLSelectElement>, id: number, setCurrentColor: React.Dispatch<React.SetStateAction<string>>) { 
    e.preventDefault();
    let newColor = e.target.value;
    try {
      const res = await axios.post(`http://localhost:4000/updateColor/${id}/`, {newColor : newColor});
      setCurrentColor(newColor);
      return res.data.data;
    } catch (err) {
      console.log({ err });
    } 
  }

  static async updateRank(id: number, rank: boolean, setRank: React.Dispatch<React.SetStateAction<boolean>>) { 
    rank ? setRank(false) : setRank(true);
    let rankBit; 
    rank ? rankBit = 0 : rankBit = 1;
    try {
      const res = await axios.post(`http://localhost:4000/updateSenior/${id}/`, {rank : rankBit});  
      return res.data.data;
    } catch (err) {
        console.log({ err });
    } 
  }
}