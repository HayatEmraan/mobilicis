import ConnectionComponent from "@/components/connections/connectioncomp";

const ConnectionsPage = () => {
  return (
    <>
      <ConnectionComponent />
    </>
  );
};

export default ConnectionsPage;

export async function generateMetadata({ params }) {
  return {
    title: "Mobilicis | Connections",
  };
}
