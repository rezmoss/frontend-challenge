import ServiceBoard from "../components/ServiceBoard";

export default function Page() {
  return (
    <main className="page">
      <h1>Service Board</h1>
      <p className="subtitle">Health of our services over the last 24 hours.</p>
      <ServiceBoard />
    </main>
  );
}
