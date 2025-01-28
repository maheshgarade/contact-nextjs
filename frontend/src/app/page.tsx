import { Contact } from '@/models/Contact';
import ContactTable from '../components/tables/ContactTable/ContactTable';
import { getContacts } from '@/services/contactService';

export default async function Home() {
  const contacts: Contact[] = await getContacts();
  return (
    <main>
      <div style={{ padding: '1rem' }}>
        <ContactTable contacts={contacts} />
      </div>
    </main>
  );
}
