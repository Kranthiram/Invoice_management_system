import axios from 'axios';

const API_URL = "http://localhost:8080";

export const saveInvoice = async (payload) => {
  try {
    return await axios.post(`${API_URL}/invoice`, payload);           
  } catch (error) {
    console.log('Error:', error.message);
    return error.response.data;                    
  }
};

export const getAllInvoice = async () =>{
    try{
        return await axios.get(`${API_URL}/invoice`);
    }catch(error){
       console.log('Error:', error.response?.data || error.message);
    throw error;   
    }
}

export const deleteInvoice = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/invoice/${id}`);
    return response.data;            
  } catch (error) {
    console.log('Error:', error.response?.data || error.message);
    throw error;                    
  }
};