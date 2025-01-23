import useFetch from ".";

export default function UseFetchHookTest() {

  // useFetch custom Hook'u oluşturduk.
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, pending);

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending ! Please wait.</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((item) => <p key={item.key}>{item.title}</p>)
        : null}
      {/* birşey yoksa null render et diyoruz */}
    </div>
  );
}
