// b1f0e5e001a5496aa5b203730750ce6d

// secret_TUyIosSi7KkYvzxMUVKmlfz2YranHIhVnhlVIyUpz7M

const fetchNotion = async () => {
  const res = await fetch('http://localhost:3000/api/notion');
  const data = await res.json();

  return data;
};

export default async function Page() {
  const data = await fetchNotion();

  return (
    <div className="h-screen flex justify-center items-center">
      <h1>Ola</h1>
    </div>
  );
}
