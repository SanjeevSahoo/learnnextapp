const delayFetch = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ data: 1 }), 5000);
  });

const loadDataFromServer = async () => {
  const response = await delayFetch();
  return response;
};

async function Dashboard() {
  const articles = await loadDataFromServer();
  return <div>Dashboard Page {JSON.stringify(articles)}</div>;
}

export default Dashboard;
