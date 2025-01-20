import ContactTable from '../components/ContactTable';

export default function Home() {
  return (
    <main>
      <div style={{ padding: '1rem' }}>
        <button>Add Contact</button>
        <ContactTable />
      </div>
    </main>
  );
}
