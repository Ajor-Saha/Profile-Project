import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'flowbite-react';
import { useSelector } from 'react-redux';

const DashContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { accessToken } = useSelector((state) => state.user);
  
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const res = await axios.get('https://profile-project-api.vercel.app/api/contact/getallContacts', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setContacts(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setLoading(false);
      }
    };
    

    fetchContacts();
  }, []);

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      <h1 className="py-2 font-semibold text-lg text-center">All Contact Information</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table hoverable className="shadow-md">
          <Table.Head>
            <Table.HeadCell>Client Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Subject</Table.HeadCell>
            <Table.HeadCell>Client Message</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {contacts.map((contact) => (
              <Table.Row key={contact._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{contact.fullName}</Table.Cell>
                <Table.Cell>{contact.email}</Table.Cell>
                <Table.Cell>{contact.subject}</Table.Cell>
                <Table.Cell>{contact.message}</Table.Cell>
                <Table.Cell>
                  <span className="font-medium text-red-500 hover:underline cursor-pointer">Delete</span>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </div>
  );
};

export default DashContact;
