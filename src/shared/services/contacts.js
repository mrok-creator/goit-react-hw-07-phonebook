import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://629ef274461f8173e4dc6fcb.mockapi.io/api/v1/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async contact => {
  const { data } = await instance.post('/', contact);
  return data;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
