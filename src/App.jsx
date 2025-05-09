import "./App.css";
import useSWR from "swr";

const headers = { Accept: "application/json" };
const fetcher = (url) => fetch(url, { headers }).then((res) => res.json());

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const { error, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load.</div>;

  return <div>Status: OK</div>;
}

export default App;
